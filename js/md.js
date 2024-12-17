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
    fetch(`${baseUrl}/tree.xml`)
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");
            const sidebar = document.getElementById('sidebar');

            // Updated to match your XML structure:
            const files = xmlDoc.querySelectorAll('file');
            files.forEach(file => {
                const filePath = file.textContent;
                const fileName = filePath.split('/').pop(); // Extract the file name
                const link = document.createElement('a');
                link.href = `${baseUrl}${filePath}.html`; // Use baseUrl to create the link
                link.textContent = fileName;
                sidebar.appendChild(link);
            });
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
}