fetch('./classes/aulas.json')
  .then(response => response.json())
  .then(data => {
    // Manipule os dados do JSON aqui
    let index = 0;
    data.forEach(element => {
        const accordion_item = document.createElement("div");
        accordion_item.className = "accordion-item";
        
        const accordion_header = document.createElement("h2");
        accordion_header.className = "accordion-header";

        const accordion_button = document.createElement("button");
        accordion_button.className = "accordion-button";
        accordion_button.innerHTML = element.title;
        accordion_button.type = "button";
        accordion_button.setAttribute("data-bs-toggle", "collapse");
        accordion_button.setAttribute("data-bs-target", "#panelsStayOpen-collapse"+index);
        accordion_button.setAttribute("aria-expanded", "true");
        accordion_button.setAttribute("aria-controls", "panelsStayOpen-collapse"+index);

        const panelsStayOpen_collapse = document.createElement("div");
        panelsStayOpen_collapse.id = "panelsStayOpen-collapse"+index;
        panelsStayOpen_collapse.className = "accordion-collapse collapse";

        const accordion_body = document.createElement("div");
        accordion_body.className = "accordion-body";
        accordion_body.innerHTML = element.description;

        const class_link = document.createElement('a');
        class_link.href = element.url;
        class_link.innerHTML = "Link para a aula";
        class_link.target = "_blank";
        class_link.style = "display:block;color:#E6526A!important;text-decoration:none";

        accordion_body.appendChild(class_link);

        const accordion = document.getElementById("accordionPanelsStayOpenExample");

        panelsStayOpen_collapse.appendChild(accordion_body);
        accordion_header.appendChild(accordion_button);

        accordion_item.appendChild(accordion_header);
        accordion_item.appendChild(panelsStayOpen_collapse);

        accordion.appendChild(accordion_item);

        index += 1;
    });
});