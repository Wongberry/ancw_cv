document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MENÚ PRINCIPAL
    ========================================== */

    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".content-section");


    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const sectionId = this.getAttribute("data-section");


            // Quitar active de todos los botones
            menuItems.forEach(function (menu) {
                menu.classList.remove("active");
            });


            // Activar botón seleccionado
            this.classList.add("active");


            // Ocultar todas las secciones
            sections.forEach(function (section) {
                section.classList.remove("active");
            });


            // Mostrar sección seleccionada
            const selectedSection = document.getElementById(sectionId);

            if (selectedSection) {
                selectedSection.classList.add("active");
            }

        });

    });



    /* ==========================================
       IDIOMAS
    ========================================== */

    const btnES = document.getElementById("btn-es");
    const btnEN = document.getElementById("btn-en");


    function changeLanguage(language) {

        const elements = document.querySelectorAll("[data-es][data-en]");


        elements.forEach(function (element) {

            element.textContent = element.getAttribute(
                "data-" + language
            );

        });


        // Cambiar idioma del documento
        document.documentElement.lang = language;


        // Cambiar botón activo
        if (language === "es") {

            btnES.classList.add("active");
            btnEN.classList.remove("active");

        } else {

            btnEN.classList.add("active");
            btnES.classList.remove("active");

        }


        // Guardar idioma seleccionado
        localStorage.setItem("language", language);

    }



    /* ==========================================
       EVENTOS DE IDIOMA
    ========================================== */

    btnES.addEventListener("click", function () {
        changeLanguage("es");
    });


    btnEN.addEventListener("click", function () {
        changeLanguage("en");
    });



    /* ==========================================
       CARGAR IDIOMA GUARDADO
    ========================================== */

    const savedLanguage = localStorage.getItem("language");


    if (savedLanguage) {

        changeLanguage(savedLanguage);

    } else {

        changeLanguage("es");

    }

});