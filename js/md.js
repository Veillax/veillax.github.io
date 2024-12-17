// Dynamically load and render Markdown content from a URL into the page
async function renderFileToHtml(baseUrl, filePath, targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    if (!targetElement) {
        console.error(`Element with ID "${targetElementId}" not found.`);
        return;
    }

    try {
        // Construct the full file URL
        const fileUrl = `${baseUrl}/${filePath}.md`;

        // Fetch the file content from the URL
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const fileContent = await response.text();

        // Convert Markdown to HTML using Showdown
        const converter = new showdown.Converter();
        const htmlContent = converter.makeHtml(fileContent);

        // Render HTML content in the target element
        targetElement.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error rendering file:', error.message);
        targetElement.textContent = 'Failed to load content.';
    }
}

function loadSidebar(baseUrl) {
    // Check if sidebar element exists
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error('Sidebar element not found.');
        return;
    }

    // Fetch and parse the tree.xml file
    fetch(`${baseUrl}/tree.xml`)
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");

            // Select all file elements
            const files = xmlDoc.querySelectorAll('file');
            files.forEach(file => {
                const filePath = file.textContent.trim(); // Ensure no extra spaces
                const fileName = filePath.split('/').pop(); // Extract the file name
                
                // Create the link for each file
                const link = document.createElement('a');
                link.href = `${baseUrl}${filePath}.html`; // Construct the link with base URL and file path
                link.textContent = fileName;
                
                // Append the link to the sidebar
                sidebar.appendChild(link);
                sidebar.appendChild(document.createElement('br')); // Add a line break between links
            });
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
}
