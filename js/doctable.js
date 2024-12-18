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

            docs.forEach((doc, index) => {
                const path = doc.getAttribute("path");
                const name = doc.getAttribute("name");
                const description = doc.querySelector("description")?.textContent.trim() || "No description available";

                // Create a new table row
                const row = document.createElement("tr");

                // Add zebra striping
                if (index % 2 === 1) {
                    row.classList.add("table-active");
                }

                // Add columns
                const nameCell = document.createElement("td");
                nameCell.textContent = name;
                nameCell.style.textAlign = "left"; 
                nameCell.style.verticalAlign = "middle"; 
                nameCell.style.width = "30%";

                const descriptionCell = document.createElement("td");
                descriptionCell.textContent = description;
                descriptionCell.style.textAlign = "left";
                descriptionCell.style.verticalAlign = "middle"; 
                descriptionCell.style.width = "60%";

                const pathCell = document.createElement("td");
                pathCell.style.textAlign = "right"; 
                pathCell.style.verticalAlign = "middle"; 
                pathCell.style.width = "10%"; 
                const button = document.createElement("a");
                button.href = `https://docs.veillax.com/docs${path}`;
                const buttonTextSpan = document.createElement('span');
                buttonTextSpan.textContent = 'Open';
                const iconSpan = document.createElement('span');
                iconSpan.style.marginLeft = "5px"
                iconSpan.classList.add('material-symbols-outlined');
                iconSpan.textContent = 'open_in_new';
                buttonTextSpan.appendChild(iconSpan);
                button.appendChild(buttonTextSpan);
                button.style.display = "inline-block";
                button.style.padding = "8px 16px";
                button.style.borderRadius = "5px";
                button.style.backgroundColor = "rgb(19, 123, 87)";
                button.style.color = "#FFF";
                button.style.textDecoration = "none";
                buttonTextSpan.style.display = "block";
                buttonTextSpan.style.marginLeft = "auto";
                buttonTextSpan.style.marginRight = "auto";
                buttonTextSpan.classList.add("justify-content-center");
                buttonTextSpan.classList.add("align-items-center");
                buttonTextSpan.classList.add("d-flex");
                pathCell.appendChild(button);

                // Append cells to the row
                row.appendChild(nameCell);
                row.appendChild(descriptionCell);
                row.appendChild(pathCell);

                // Append the row to the table body
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error parsing XML or loading table:", error);
        });
}