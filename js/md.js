// Dynamically load and render Markdown content from a URL into the page
async function renderFileToHtml(fileUrl, targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    if (!targetElement) {
        console.error(`Element with ID "${targetElementId}" not found.`);
        return;
    }

    try {
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

function getTreeXmlUrl() {
    const url = window.location.href;
    const parts = url.split('/').filter(part => part !== '');
    if (parts.length >= 3 && parts[0] === 'docs' && parts[1] === 'docs') {
      return `https://docs.veillax.com/docs/${parts[2]}/tree.xml`;
    } else {
      return null;
    }
  }
  
  function loadSidebar(treeXmlUrl) {
    fetch(treeXmlUrl)
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
          link.href = filePath.substring(1) + ".html"; // Remove leading slash and add .html
          link.textContent = fileName; 
          sidebar.appendChild(link);
        });
      })
      .catch(error => {
        console.error('Error loading sidebar:', error);
      });
  }
  
  // Automatically load the sidebar
  const treeXmlUrl = getTreeXmlUrl();
  if (treeXmlUrl) {
    loadSidebar(treeXmlUrl);
  } else {
    console.error('Could not determine tree.xml URL.');
  }
  