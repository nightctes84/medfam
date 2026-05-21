document.addEventListener("DOMContentLoaded", function () {
    // Detectamos la profundidad de la carpeta actual para ajustar las rutas relativas automáticamente
    const pathName = window.location.pathname;
    let prefix = "./";
    
    // Si la página actual está dentro de una subcarpeta, necesitamos volver un nivel atrás (../)
    // Esto evita que se rompan los enlaces desde Adulto, Evolucion, Pediatria o Tocoginecologia
    if (pathName.includes("/Adulto/") || 
        pathName.includes("/Evolucion/") || 
        pathName.includes("/Pediatria/") || 
        pathName.includes("/Tocoginecologia/")) {
        prefix = "../";
    }

    // Definimos los enlaces con el prefijo dinámico
    const links = [
        { name: "Inicio", url: prefix + "index.html" },
        { name: "Tocoginecología", url: prefix + "Tocoginecologia/Togoginecologia.html" },
        { name: "Pediatría", url: prefix + "Pediatria/Pediatria.html" },
        { name: "Evoluciones", url: prefix + "Evolucion/Evoluciones.html" },
        { name: "Recomendaciones", url: prefix + "Evolucion/Recomendaciones.html" }
    ];

    // Construimos el HTML de la barra de navegación
    let navbarHTML = `
    <nav class="bg-slate-900 text-white shadow-lg sticky top-4 z-50 
            w-[92%] max-w-6xl mx-auto rounded-2xl">
        div class="px-6">
            <div class="flex justify-between h-16">
                <div class="flex items-center space-x-2">
                    <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                        MEDFAM
                    </span>
                    <span class="text-xs text-slate-400 hidden sm:inline"></span>
                </div>
                
                <div class="flex items-center space-x-1 md:space-x-4">
    `;

    // Iteramos los links y marcamos como 'activo' el que coincida con la URL actual
    links.forEach(link => {
        const isActive = pathName.endsWith(link.url.replace('../', '').replace('./', ''));
        const activeClass = isActive 
            ? "bg-blue-600 text-white font-medium" 
            : "text-slate-300 hover:bg-slate-800 hover:text-white transition duration-200";

        navbarHTML += `
            <a href="${link.url}" class="px-3 py-2 rounded-lg text-sm ${activeClass}">
                ${link.name}
            </a>
        `;
    });

    navbarHTML += `
                </div>
            </div>
        </div>
    </nav>
    `;

    // Insertamos la barra de navegación al principio del body de la página
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});