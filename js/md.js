async function renderFileToHtml(filePath, targetElementId) {
    const baseUrl = window.location.href.replace(/\/[^\/]*\.html.*$/, '').replace(/\/$/, ''); 
    const targetElement = document.getElementById(targetElementId);

    if (!targetElement) {
        console.error(`Element with ID "${targetElementId}" not found.`);
        return;
    }

    try {
        const fileUrl = `${baseUrl}/${filePath}.md`;
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const fileContent = await response.text();

        // Configure Showdown with header link support
        const converter = new showdown.Converter({
            ghCompatibleHeaderId: true,
            headerLevelStart: 1,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            tables: true,
            tasklists: true,
            smoothLivePreview: true
        });

        const htmlContent = converter.makeHtml(fileContent);
        targetElement.innerHTML = htmlContent;

        // Process images
        const images = targetElement.querySelectorAll('img');
        images.forEach(image => {
            image.classList.add(
                image.src.includes('img.shields.io') ? 'badge-image' : 'content-image'
            );
            image.loading = 'lazy';
        });

        // Add header links
        const headers = targetElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            if (header.id) {
                const linkIcon = document.createElement('a');
                linkIcon.className = 'header_anchor';
                linkIcon.href = `#${header.id}`;
                linkIcon.setAttribute('aria-label', 'Link to this section');
                linkIcon.innerHTML = '<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 0, \'wght\' 300, \'opsz\' 20;">tag</span>';
                header.appendChild(linkIcon);
            }
        });

        // Add language badges to code blocks
        const codeBlocks = targetElement.querySelectorAll('pre code');
        codeBlocks.forEach(codeBlock => {
            const language = codeBlock.className.replace('language-', '');
            if (language) {
                codeBlock.parentElement.setAttribute('data-language', language);
            }
        });

        // Handle hash navigation after content is loaded
        if (window.location.hash) {
            setTimeout(() => {
                const targetHeader = document.getElementById(window.location.hash.slice(1));
                if (targetHeader) {
                    targetHeader.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Small delay to ensure content is rendered
        }
        
    } catch (error) {
        console.error('Error rendering file:', error.message);
        targetElement.textContent = 'Failed to load content.';
    }
}

// Function to load the sidebar dynamically
function loadSidebar() {
    const baseUrl = window.location.href.replace(/\/[^\/]*\.html.*$/, '').replace(/\/$/, '');
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

// Add event listener for hash changes
window.addEventListener('hashchange', () => {
    if (window.location.hash) {
        const targetHeader = document.getElementById(window.location.hash.slice(1));
        if (targetHeader) {
            targetHeader.scrollIntoView({ behavior: 'smooth' });
        }
    }
});