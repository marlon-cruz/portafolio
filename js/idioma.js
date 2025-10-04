
const btnIdioma = document.getElementById('idioma')
const textIdioma = document.getElementById('textIdioma')

function comprobacionLocal(){
    if (localStorage.getItem("proyecIndex") == null) {
        localStorage.setItem("proyecIndex", "0");
       
    }    
    if (localStorage.getItem("idioma") == null) {
        localStorage.setItem("idioma", "ES");
    }    
}
comprobacionLocal()
btnIdioma.addEventListener("click", event =>{
    event.preventDefault()
    comprobacionLocal()
    const idioma = localStorage.getItem("idioma");
     cambio(idioma)
     
})

function cambio(idioma){
   
    if(idioma == "EN"){
        textIdioma.innerText = "ES"
        localStorage.setItem("idioma", "ES");
    }else{
        textIdioma.innerText = "EN"
        localStorage.setItem("idioma", "EN");
    }

    inicioCambio(idioma)
    menuCambio(idioma)
   sobreMiCambio(idioma)
   proyectosMenuCambio(idioma)
   proyectosCambio(idioma)
}

//datos y funcion de inicio
const inicioTitulo = document.getElementById("inicioTitulo");
const inicioFrase = document.getElementById("inicioFrace");
const inicioBoton = document.getElementById("inicioDescarga");
const inicioDatos = [
    {
        titulo: "Inicio",
        frase:'"Siguiendo la línea del futuro"' ,
        boton: '<img src="img/download-solid-full.svg" alt="Descargar"> Descargar CV'
    },
    {
        titulo: "Home",
        frase: '"Following the line of the future"',
        boton: '<img src="img/download-solid-full.svg" alt="Descargar"> Download CV'
    }
]
function inicioCambio(idioma){

    if(idioma == "EN"){
        inicioTitulo.innerHTML = inicioDatos[0].titulo
        inicioFrase.innerText = inicioDatos[0].frase
        inicioBoton.innerHTML = inicioDatos[0].boton
    }else{
        inicioTitulo.innerHTML = inicioDatos[1].titulo
        inicioFrase.innerText = inicioDatos[1].frase
        inicioBoton.innerHTML = inicioDatos[1].boton
    }
    
   

}

//datos y funcion del menu
const menuInicio = document.getElementById("menuInicio");
const menuSobreMi = document.getElementById("menusobre");
const menuProyecto = document.getElementById("menuproyectos");
const menuIntereses = document.getElementById("menuintereses");
const menuContactame = document.getElementById("menucontacto");
const menuDatos = [
    {
        Inicio: "Inicio",
        SobreMi:' Sobre Mi' ,
        Projectos: 'Projectos',
        intereses: 'Intereses',
        contactame: 'Contactame'
    },
    {
        Inicio: "Home",
        SobreMi:'About me' ,
        Projectos: 'Projects',
        intereses: 'Interests',
        contactame: 'Contact me'   
    }
]
function menuCambio(idioma){
    if(idioma == "EN"){
        menuInicio.innerText = menuDatos[0].Inicio
        menuSobreMi.innerText = menuDatos[0].SobreMi
        menuProyecto.innerText = menuDatos[0].Projectos
        menuIntereses.innerText = menuDatos[0].intereses
        menuContactame.innerText = menuDatos[0].contactame
    }else{
        menuInicio.innerText = menuDatos[1].Inicio
        menuSobreMi.innerText = menuDatos[1].SobreMi
        menuProyecto.innerText = menuDatos[1].Projectos
        menuIntereses.innerText = menuDatos[1].intereses
        menuContactame.innerText = menuDatos[1].contactame
    }
}

//datos y funcion del sobre mi
const SobreMiTitulo = document.getElementById("sobremiTitilo");
const SobreMiFease = document.getElementById("sobremiFrase");
const SobreMiParrafo = document.getElementById("sonbremiParrafo");

const sobreMiDatos = [
    {
        titulo: "Sobre Mi",
        frase:'/*La vida se vive en cascada, una línea a la vez*/' ,
        parrafo: "Cuento con habilidades tanto en el desarrollo Front-end como en Back-end, entusiasmado por brindar soluciones creativas y funcionales, contando con una gran adaptabilidad a diferentes entornos de cooperación. Con conosimientos en: C#, HTML, CSS, JS - JavaScript y bases de datos SQL."
    },
    {
        titulo: "About me",
        frase:'/*Life is lived in a cascade, one line at a time*/' ,
        parrafo: 'I have skills in both front-end and back-end development, eager to provide creative and functional solutions, and highly adaptable to different collaborative environments. I have knowledge of C#, HTML, CSS, JS - JavaScript, and SQL databases.'
    }
]



function sobreMiCambio(idioma){
    if(idioma == "EN"){
        SobreMiTitulo.innerText = sobreMiDatos[0].titulo
        SobreMiFease.innerText = sobreMiDatos[0].frase
        SobreMiParrafo.innerText = sobreMiDatos[0].parrafo
    }else{
        SobreMiTitulo.innerText = sobreMiDatos[1].titulo
        SobreMiFease.innerText = sobreMiDatos[1].frase
        SobreMiParrafo.innerText = sobreMiDatos[1].parrafo
    }
}

//datos y funciones de cambio de idioma del menu del proyecto

const proyectosTitulo = document.getElementById("proyectosTitle");
const proyectosMenu1 = document.getElementById("btnsoftware");
const proyectosMenu2 = document.getElementById("btnSitioWeb");
const proyectosMenu3 = document.getElementById("btnAppMovil");
const proyectosMenu4 = document.getElementById("btnAppWeb");


const proyecMenuDatos = [
    {
        titulo: "Proyectos academicos",
        menu1: "Software",
        menu2: "Sitio Web",
        menu3: "Aplicación movil",
        menu4: "Aplicación Web",
    },
    {
        titulo: "Academic projects",
        menu1: "Software",
        menu2: "Website",
        menu3: "Mobile App",
        menu4: "Web App",
    }
]
function proyectosMenuCambio(idioma){
    if(idioma == "EN"){
        proyectosTitulo.innerText = proyecMenuDatos[0].titulo
        proyectosMenu1.innerText = proyecMenuDatos[0].menu1
        proyectosMenu2.innerText = proyecMenuDatos[0].menu2
        proyectosMenu3.innerText = proyecMenuDatos[0].menu3
        proyectosMenu4.innerText = proyecMenuDatos[0].menu4
    }else{
        proyectosTitulo.innerText = proyecMenuDatos[1].titulo
        proyectosMenu1.innerText = proyecMenuDatos[1].menu1
        proyectosMenu2.innerText = proyecMenuDatos[1].menu2
        proyectosMenu3.innerText = proyecMenuDatos[1].menu3
        proyectosMenu4.innerText = proyecMenuDatos[1].menu4
    }
}



//datos y funciones de cambio de idioma de descripcion del proyecto

const proyectTitulo = document.getElementById("proyectTitulo");
const proyectImg = document.getElementById("proyectImg");
const proyectDescripcion = document.getElementById("proyectDescripcion");
const proyectoTecno = document.getElementById("proyectoTecno");
const proyectoRol = document.getElementById("proyectoRol");
const proyectTecnoList = document.getElementById("proyectTecnoList");
const ProyectlickGithub = document.getElementById("ProyectlickGithub");


const proyectDescripcionDatos = {
        "0":{
           ES: {
            titulo: "Farmacia Divino Niño - Software",
            imagen: 'img/imgProyect/software.png',
            descripcion: "Sistema de gestión de inventario por lote, ventas y devoluciones de medicamentos.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>c#</li><li>mySQL</li><li>Vs Studio 2022</li><li>.NET</li><li>HTML</li><li>css</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            },
           EN: {
            titulo: "Farmacia Divino Niño - Software",
            imagen: "img/imgProyect/software.png",
            descripcion: "Batch inventory management system, sales and returns of medications.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>c#</li><li>mySQL</li><li>Vs Studio 2022</li><li>.NET</li><li>HTML</li><li>css</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            }
        },
        "1":{
           ES: {
            titulo: "Farmacia Divino Niño - Sitio Web",
            imagen: 'img/imgProyect/web informativa.png',
            descripcion: "Pagina web informativa para farmacia.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>HTML</li><li>CSS</li><li>JS - JavaScript</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            },
           EN: {
            titulo: "Farmacia Divino Niño - Website",
            imagen: "img/imgProyect/web informativa.png",
            descripcion: "Informative website for pharmacies.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>HTML</li><li>CSS</li><li>JS - JavaScript</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            }
        },
        "2":{
           ES: {
            titulo: "PetCare - Aplicación movil",
            imagen: 'img/imgProyect/PetCare.png',
            descripcion: "Aplicación móvil para el manejo centralizado de mascotas.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>Java</li><li>XML</li><li>Sqlite</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            },
           EN: {
            titulo: "PetCare - Mobile application",
            imagen: "img/imgProyect/PetCare.png",
            descripcion: "Mobile application for centralized pet management.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>Java</li><li>XML</li><li>Sqlite</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            }
        },
        "3":{
           ES: {
            titulo: "Red de esperanza - Aplicación Web",
            imagen: 'img/imgProyect/red esperanza.jpeg',
            descripcion: "Aplicación web diseñada como apoyo a la comunidad, donde se centraliza la información de personas desaparecidas o con necesidades.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>c#</li><li>.NET</li><li>HTML</li><li>CSS</li><li>BootStrap</li><li>Sql Server</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            },
           EN: {
            titulo: "Red de esperanza - Web Application",
            imagen: "img/imgProyect/red esperanza.jpeg",
            descripcion: "Web application designed to support the community, centralizing information on missing persons or those in need.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>c#</li><li>.NET</li><li>HTML</li><li>CSS</li><li>BootStrap</li><li>Sql Server</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            }
        }
    }
 
function proyectosCambio(idioma){
    console.log(idioma)
    const indiceProyect = localStorage.getItem("proyecIndex")
    if(idioma = "-1"){
        idioma = localStorage.getItem("idioma")
    }
    console.log(idioma)
    
    if(idioma == "ES"){
        proyectTitulo.innerText = proyectDescripcionDatos[indiceProyect].ES.titulo
        proyectImg.src = proyectDescripcionDatos[indiceProyect].ES.imagen
        proyectDescripcion.innerText = proyectDescripcionDatos[indiceProyect].ES.descripcion
        proyectoTecno.innerText = proyectDescripcionDatos[indiceProyect].ES.tecnologias
        proyectoRol.innerText = proyectDescripcionDatos[indiceProyect].ES.proyectoRol
        proyectTecnoList.innerHTML = proyectDescripcionDatos[indiceProyect].ES.tecnoList
        ProyectlickGithub.href = proyectDescripcionDatos[indiceProyect].ES.linkGithub
    }else{
        proyectTitulo.innerText = proyectDescripcionDatos[indiceProyect].EN.titulo
        proyectImg.src = proyectDescripcionDatos[indiceProyect].EN.imagen
        proyectDescripcion.innerText = proyectDescripcionDatos[indiceProyect].EN.descripcion
        proyectoRol.innerText = proyectDescripcionDatos[indiceProyect].EN.proyectoRol
        proyectoTecno.innerText = proyectDescripcionDatos[indiceProyect].EN.tecnologias
        proyectTecnoList.innerHTML = proyectDescripcionDatos[indiceProyect].EN.tecnoList
        ProyectlickGithub.href = proyectDescripcionDatos[indiceProyect].EN.linkGithub
    }
}
