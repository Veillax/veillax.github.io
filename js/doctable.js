function loadTableFromXml(tableElementId) {
    const table = document.getElementById(tableElementId);

    if (!table) {
        console.error(`Table with ID "${tableElementId}" not found.`);
        return;
    }

    fetch("docs.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");
            const docs = xmlDoc.querySelectorAll("doc");

            const tbody = table.querySelector("tbody");

            if (!tbody) {
                console.error("Table does not have a <tbody> element.");
                return;
            }

            docs.forEach((doc) => {
                const disabled = doc.getAttribute("disbaled");
                if (disabled) return;

                const path = doc.getAttribute("path");
                const name = doc.getAttribute("name");
                const description = doc.querySelector("description")?.textContent.trim() || "No description available";

                // Create row
                const row = document.createElement("tr");

                // Name cell
                const nameCell = document.createElement("td");
                nameCell.textContent = name;
                nameCell.className = "fw-medium"; // Bootstrap font-weight-medium

                // Description cell
                const descriptionCell = document.createElement("td");
                descriptionCell.textContent = description;

                // Action cell
                const actionCell = document.createElement("td");
                actionCell.className = "text-end"; // Right align content

                // Create button
                const button = document.createElement("a");
                button.href = window.location.origin + `/docs${path}`;
                button.className = "btn btn-success btn-sm"; // Bootstrap button styling
                button.innerHTML = `
                    Open
                    <span class="material-symbols-outlined ms-1" style="font-size: 1rem; vertical-align: middle;">
                        open_in_new
                    </span>
                `;

                actionCell.appendChild(button);

                // Append cells
                row.appendChild(nameCell);
                row.appendChild(descriptionCell);
                row.appendChild(actionCell);

                // Append row
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error parsing XML or loading table:", error);
            
            // Add error message to table
            const tbody = table.querySelector("tbody");
            const errorRow = document.createElement("tr");
            const errorCell = document.createElement("td");
            errorCell.colSpan = 3;
            errorCell.className = "text-center text-danger";
            errorCell.textContent = "Failed to load documentation. Please try again later.";
            errorRow.appendChild(errorCell);
            tbody.appendChild(errorRow);
        });
}