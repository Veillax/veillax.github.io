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

            // Create containers for the header and links
            const headerContainer = document.createElement('div');
            headerContainer.classList.add('navbar-header');
            sidebar.appendChild(headerContainer);

            const linkContainer = document.createElement('div');
            linkContainer.classList.add('navbar-links');
            sidebar.appendChild(linkContainer);

            // Loop through each file entry in the XML
            const files = xmlDoc.querySelectorAll('file');
            files.forEach(file => {
                const filePath = file.getAttribute('path');
                const fileName = file.getAttribute('name');
                const isHeader = file.getAttribute('header') === 'true';

                const link = document.createElement('a');
                link.href = `${baseUrl}${filePath}.html`; // Create the full URL to the .html file
                link.textContent = fileName; // Set the link text

                // If this file is a header, create the header link
                if (isHeader) {
                    const header = document.createElement('h4');
                    const headerLink = document.createElement('a');
                    headerLink.href = `${baseUrl}${filePath}.html`;
                    headerLink.textContent = fileName;
                    header.appendChild(headerLink);
                    headerContainer.appendChild(header);
                } else {
                    linkContainer.appendChild(link);
                }
            });
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
}
