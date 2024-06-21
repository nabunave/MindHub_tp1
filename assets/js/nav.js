function loadNav() { //cargamos el nav
    fetch('../pages/nav.html') //cargar contenido del nav
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data; //inserta el nav en el html
            highlightCurrentPage(); //esto resalta la pagina actual y añade current, para poder resaltar boton
        });
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname; //obtenemos la ruta
    const navLinks = document.querySelectorAll('nav a');//obtenemos todos los enlaces

    navLinks.forEach(link => { //recorremos los enlaces para encontrar el actual y agregar el current
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath ||
            (linkPath === '/index.html' && currentPath === '/')) {
            link.classList.add('current');
        }
    });
}

window.onload = loadNav; //cargamos el nav al cargar la pagina
