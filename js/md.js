async function renderFileToHtml(filePath, targetElementId) {
    const baseUrl = window.location.href.replace(/\/[^\/]*\.html$/, '').replace(/\/$/, ''); 
    const targetElement = document.getElementById(targetElementId);

    if (!targetElement) {
        console.error(`Element with ID "${targetElementId}" not found.`);
        return;
    }

    try {
        // Construct the full file URL
        const fileUrl = `${baseUrl}/${filePath}.md`;

        // Fetch the file content asynchronously
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

        // Add the class "content-image" or "badge-image" to images after rendering
        const images = targetElement.querySelectorAll('img');
        images.forEach(image => {
            if (image.src.includes('img.shields.io')) {
                image.classList.add('badge-image');
            } else {
                image.classList.add('content-image');
            }
        });

        
    } catch (error) {
        console.error('Error rendering file:', error.message);
        targetElement.textContent = 'Failed to load content.';
    }
}


// Function to load the sidebar dynamically
function loadSidebar() { 
    const baseUrl = window.location.href.replace(/\/[^\/]*\.html$/, '').replace(/\/$/, ''); 
    fetch(`${baseUrl}/tree.xml`)
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");
            const sidebar = document.getElementById('sidebar');

            sidebar.innerHTML = ''; // Clear previous content

            // Create the toggle button dynamically
            const toggleButton = document.createElement('button');
            toggleButton.id = 'toggleButton';
            toggleButton.classList.add('toggle-button');

            const exSPANd = document.createElement('span');
            exSPANd.classList.add('material-symbols-outlined');
            exSPANd.textContent = 'menu';
            toggleButton.appendChild(exSPANd);

            sidebar.appendChild(toggleButton); 

            const homeSpan = document.createElement('span');
            homeSpan.classList.add('align-items-center', 'd-flex');
            homeSpan.style.paddingBottom = "8px";
            homeSpan.style.color = "#8b8b8b"

            const homeLink = document.createElement('a');
            homeLink.href = window.location.origin;
            homeLink.style.textDecoration = 'none';
            
            const iconSpan = document.createElement('span');
            iconSpan.classList.add('material-symbols-outlined');
            iconSpan.style.marginRight = '5px';
            iconSpan.style.marginLeft = '8px';
            iconSpan.textContent = 'arrow_back';

            const textSpan = document.createElement('span');
            textSpan.style.fontSize = '12px';
            textSpan.textContent = 'Back';

            homeSpan.appendChild(iconSpan);
            homeSpan.appendChild(textSpan);
            homeLink.appendChild(homeSpan);
            sidebar.appendChild(homeLink);

            // Process sections and their links
            const sections = xmlDoc.querySelectorAll('section');
            sections.forEach(section => {
                const sectionPath = section.getAttribute('path');
                const sectionName = section.getAttribute('name');

                const sectionContainer = document.createElement('div');
                sectionContainer.classList.add('section-container');
                sidebar.appendChild(sectionContainer);

                const header = document.createElement('h4');
                if (sectionPath) {
                    const headerLink = document.createElement('a');
                    headerLink.href = `${baseUrl}${sectionPath}.html`;
                    headerLink.textContent = sectionName;
                    header.appendChild(headerLink);
                } else {
                    header.textContent = sectionName;
                }
                header.style.marginLeft = "8px"
                sectionContainer.appendChild(header);

                const files = section.querySelectorAll('file');
                const linkContainer = document.createElement('div');
                linkContainer.classList.add('navbar-links');
                sectionContainer.appendChild(linkContainer);

                files.forEach(file => {
                    const filePath = file.getAttribute('path');
                    const fileName = file.getAttribute('name');

                    const link = document.createElement('a');
                    link.href = `${baseUrl}${filePath}.html`;
                    link.textContent = fileName;

                    const linkItem = document.createElement('div');
                    linkItem.classList.add('link-item');
                    linkItem.appendChild(link);
                    linkContainer.appendChild(linkItem);
                });
                // Event listener for the toggle button
                document.getElementById('toggleButton').addEventListener('click', toggleSidebar);

            });
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
        
}

// Function to toggle the sidebar's collapse state
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}