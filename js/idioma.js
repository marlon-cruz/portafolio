
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
    contactameCambio(idioma)
    inicioCambio(idioma)
    menuCambio(idioma)
    sobreMiCambio(idioma)
    proyectosMenuCambio(idioma)
    proyectosCambio(idioma)
    reconocimientoCambio(idioma)
    resenaCambio(idioma)
        
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
const menuRecommendations = document.getElementById("menuRecommendacion");
const menuContactame = document.getElementById("menucontacto");
const menuDatos = [
    {
        Inicio: "Inicio",
        SobreMi:' Sobre Mi' ,
        Projectos: 'Projectos',
        recomendacion: 'Reseñas',
        contactame: 'Contactame'
    },
    {
        Inicio: "Home",
        SobreMi:'About me' ,
        Projectos: 'Projects',
        recomendacion: 'Reviews',
        contactame: 'Contact me'   
    }
]
function menuCambio(idioma){
    if(idioma == "EN"){
        menuInicio.innerText = menuDatos[0].Inicio
        menuSobreMi.innerText = menuDatos[0].SobreMi
        menuProyecto.innerText = menuDatos[0].Projectos
        menuRecommendations.innerText = menuDatos[0].recomendacion
        menuContactame.innerText = menuDatos[0].contactame
    }else{
        menuInicio.innerText = menuDatos[1].Inicio
        menuSobreMi.innerText = menuDatos[1].SobreMi
        menuProyecto.innerText = menuDatos[1].Projectos
        menuRecommendations.innerText = menuDatos[1].recomendacion
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

//datos y funciones de cambio de idioma contactame

const contactameTitulo = document.getElementById("contactitulo");
const contactameNombre = document.getElementById("contacnombre");
const contactameCorreo = document.getElementById("contaccorreo");
const contactameComentario = document.getElementById("contaccomentario");
const contactameEnviar = document.getElementById("contacenviar");


const contactoDatos = [
    {
        titulo: "Contactame",
        nombre: "Nombre",
        correo: "Correo",
        comentario: "Comentario",
        enviar: "Enviar",
    },
     {
        titulo: "Contact me",
        nombre: "Name",
        correo: "Mail",
        comentario: "Comment",
        enviar: "Send",
    }
]
function contactameCambio(idioma){
    if(idioma == "EN"){
        contactameTitulo.innerText = contactoDatos[0].titulo
        contactameNombre.innerText = contactoDatos[0].nombre
        contactameCorreo.innerText = contactoDatos[0].correo
        contactameComentario.innerText = contactoDatos[0].comentario
        contactameEnviar.value = contactoDatos[0].enviar
    }else{
        contactameTitulo.innerText = contactoDatos[1].titulo
        contactameNombre.innerText = contactoDatos[1].nombre
        contactameCorreo.innerText = contactoDatos[1].correo
        contactameComentario.innerText = contactoDatos[1].comentario
        contactameEnviar.value = contactoDatos[1].enviar
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
            imagen: '<img src="img/imgProyect/software.png" alt="Proyecto Software Farmaceutico">',
            descripcion: "Software de gestión de inventario farmacéutico, enfocado en ventas y devoluciones de medicamentos, en sus distintas presentaciones, (Pastillas, Blíster, cajas) gestionando informes y alertas sobre cantidades y vencimientos de medicamentos en inventario.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>c#</li><li>mySQL</li><li>Vs Studio 2022</li><li>.NET</li><li>HTML</li><li>css</li>',
            linkGithub: "https://github.com/marlon-cruz/proyecto",
            },
           EN: {
            titulo: "Farmacia Divino Niño - Software",
            imagen: '<img src="img/imgProyect/software.png" alt="Proyecto Software Farmaceutico">',
            descripcion: "Pharmaceutical inventory management software focused on sales and returns of medications in various forms (pills, blisters, and boxes), managing reports and alerts on inventory quantities and expiration dates.",
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
            imagen: '<img src="img/imgProyect/web informativa.png" alt="Proyecto web Informativa">',
            descripcion: "Pagina web informativa la cual presenta información sobre la filosofía empresarial, valores e identidad de marca, además de exponer algunos de los medicamentos más solicitados, para dar visibilidad a la farmacia en la web, especificando horarios de atención y ubicación.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>HTML</li><li>CSS</li>',
            linkGithub: "https://github.com/Alexis2025X/Web-Farmacia-Divino-Ni-o",
            },
           EN: {
            titulo: "Farmacia Divino Niño - Website",
            imagen: '<img src="img/imgProyect/web informativa.png" alt="Proyecto web Informativa">',
            descripcion: "An informative website that presents information about the company's philosophy, values, and brand identity, as well as showcasing some of the most requested medications, to give the pharmacy visibility on the web, specifying its opening hours and location.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>HTML</li><li>CSS</li>',
            linkGithub: "https://github.com/Alexis2025X/Web-Farmacia-Divino-Ni-o",
            }
        },
        "2":{
           ES: {
            titulo: "PetCare - Aplicación movil",
            imagen: '<img src="img/imgProyect/PetCare.png" alt="PetCare App movil">',
            descripcion: "Aplicación móvil que permite gestionar los datos de las mascotas, crear recordatorios sobre la aplicación de medicamentos y/o citas médicas, además de conocer la ubicación de veterinarias cercanas en caso de una emergencia.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>Java</li><li>XML</li><li>Sqlite</li><li>FireBase</li>',
            linkGithub: "https://github.com/Alexis2025X/PetCare_2.0",
            },
           EN: {
            titulo: "PetCare - Mobile application",
            imagen: '<img src="img/imgProyect/PetCare.png" alt="PetCare App movil">',
            descripcion: "Mobile app that allows you to manage pet data, create reminders for medication administration and/or medical appointments, and locate nearby veterinary clinics in case of an emergency.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>Java</li><li>XML</li><li>Sqlite</li><li>FireBase</li>',
            linkGithub: "https://github.com/Alexis2025X/PetCare_2.0",
            }
        },
        "3":{
           ES: {
            titulo: "Red de esperanza - Aplicación Web",
            imagen: '<img src="img/imgProyect/red esperanza.jpeg" alt="Red Esperanza">',
            descripcion: "Aplicación web enfocada en el servicio a la comunidad, donde las personas pueden informar sobre ciudadanos desaparecidos especificando fechas claras de desaparición, señas físicas, cantidad de fotografías, asegurando que la información pueda llegar a la mayor de personas posibles.\nLa aplicación también permite hacer anuncios de personas necesitadas, debido a desastres naturales y/o condiciones de vida adversas.",
            tecnologias: "Tecnologias utilizadas",
            proyectoRol: "Rol desempeñado: desarrollador Frond-end y Back-end",
            tecnoList: 
            '<li>C#</li><li>.NET</li><li>HTML</li><li>CSS</li><li>BootStrap</li><li>Sql Server</li><li>JS - JavaScript</li>',
            linkGithub: "https://github.com/Alexis2025X/Red_Esperanza_form/tree/WEB_2",
            },
           EN: {
            titulo: "Red de esperanza - Web Application",
            imagen: '<img src="img/imgProyect/red esperanza.jpeg" alt="Red Esperanza">',
            descripcion: "A web application focused on community service, where people can report missing citizens by specifying clear dates of disappearance, physical characteristics, and a number of photographs, ensuring that the information reaches as many people as possible.\nThe application also allows people to make announcements about people in need due to natural disasters and/or adverse living conditions.",
            proyectoRol: "Role played: Front-end and Back-end developer",
            tecnologias: "Technologies used",
            tecnoList: 
            '<li>C#</li><li>.NET</li><li>HTML</li><li>CSS</li><li>BootStrap</li><li>Sql Server</li><li>JS - JavaScript</li>',
            linkGithub: "https://github.com/Alexis2025X/Red_Esperanza_form/tree/WEB_2",
            }
        }
    }
 
function proyectosCambio(idioma){
   
    const indiceProyect = localStorage.getItem("proyecIndex")
    if(idioma = "-1"){
        idioma = localStorage.getItem("idioma")
    }
   
    
    if(idioma == "ES"){
        proyectTitulo.innerText = proyectDescripcionDatos[indiceProyect].ES.titulo
        proyectImg.innerHTML = proyectDescripcionDatos[indiceProyect].ES.imagen
        proyectDescripcion.innerText = proyectDescripcionDatos[indiceProyect].ES.descripcion
        proyectoTecno.innerText = proyectDescripcionDatos[indiceProyect].ES.tecnologias
        proyectoRol.innerText = proyectDescripcionDatos[indiceProyect].ES.proyectoRol
        proyectTecnoList.innerHTML = proyectDescripcionDatos[indiceProyect].ES.tecnoList
        ProyectlickGithub.href = proyectDescripcionDatos[indiceProyect].ES.linkGithub
    }else{
        proyectTitulo.innerText = proyectDescripcionDatos[indiceProyect].EN.titulo
        proyectImg.innerHTML = proyectDescripcionDatos[indiceProyect].EN.imagen
        proyectDescripcion.innerText = proyectDescripcionDatos[indiceProyect].EN.descripcion
        proyectoRol.innerText = proyectDescripcionDatos[indiceProyect].EN.proyectoRol
        proyectoTecno.innerText = proyectDescripcionDatos[indiceProyect].EN.tecnologias
        proyectTecnoList.innerHTML = proyectDescripcionDatos[indiceProyect].EN.tecnoList
        ProyectlickGithub.href = proyectDescripcionDatos[indiceProyect].EN.linkGithub
    }
}

const titleReco = document.getElementById("titlePremiosReco");
const reco1 = document.getElementById("reco1");
const reco2 = document.getElementById("reco2");
const reco3 = document.getElementById("reco3");
const reco4 = document.getElementById("reco4");

const reconocimientoDatos = [
    {
        titleReco: "premios y reconocimientos",
        reco1: "Mejor CUM",
        reco2: "Conclusión de talleres",
        reco3: "Certificación CISCO",
        reco4: "Mejor CUM",
    },
     {
        titleReco: "awards and recognitions",
        reco1: "Best CUM",
        reco2: "Workshop conclusions",
        reco3: "Cisco Certification",
        reco4: "Best CUM",
    }
]

function reconocimientoCambio(idioma){
 if(idioma == "EN"){
        titleReco.innerText = reconocimientoDatos[0].titleReco
        reco1.innerText = reconocimientoDatos[0].reco1
        reco2.innerText = reconocimientoDatos[0].reco2
        reco3.innerText = reconocimientoDatos[0].reco3
        reco4.innerText = reconocimientoDatos[0].reco4
    }else{
        titleReco.innerText = reconocimientoDatos[1].titleReco
        reco1.innerText = reconocimientoDatos[1].reco1
        reco2.innerText = reconocimientoDatos[1].reco2
        reco3.innerText = reconocimientoDatos[1].reco3
        reco4.innerText = reconocimientoDatos[1].reco4
    }
}


const titleRese = document.getElementById("titleresena");
const rese1 = document.getElementById("rese1");
const rese2 = document.getElementById("rese2");
const rese3 = document.getElementById("rese3");
const rese4 = document.getElementById("rese4");
const rese5 = document.getElementById("rese5");

const resenaDatos = [
    {
        titleRese: "Reseña",
        rese1: "Durante el tiempo que tuve la oportunidad de conocerlo, demostró ser un estudiante disciplinado, comprometido con su desarrollo académico y con un interés genuino por el estudio.",
        rese2: "Ha sido una grata experiencia,  trabajo de manera rápida, demostrando conocimientos sobre su área y su atención al mis necesidades llevo a solucionar a lo que necesitaba",
        rese3: "Afirmo que él es una persona de excelente conducta, excelente en su estudio, honrado, intachable, responsable en todos sus actos y dispuesta a compartir todos sus conocimientos a una sociedad en progreso.",
        rese4: "Marlon es un joven, muy inteligente y con pensamiento crítico, me ha ayudado cuando tuvo problemas con mi computadora demostrando que es capaz de enfrentar y resolver problemas informáticos de forma eficiente y efectiva.",
        rese5: "Es un joven muy inteligente y con pensamiento crítico. Me ha asistido cuando he tenido consultas o problemas relacionadas mi computadora, demostrando que es capaz de comprender, enfrentar y resolver este tipo de problemas.",
    },
     {
        titleRese: "Review",
        rese1: "During the time I had the opportunity to know him, he proved to be a disciplined student, committed to his academic development and with a genuine interest in studying.",
        rese2: "It has been a pleasant experience. He worked quickly, demonstrating knowledge in his area, and his attention to my needs led to a solution to what I required.",
        rese3: "I affirm that he is a person of excellent conduct, excellent in his studies, honest, irreproachable, responsible in all his actions and willing to share all his knowledge with a society in progress.",
        rese4: "Marlon is a young, very intelligent, and critical thinker. He has helped me when I had problems with my computer, demonstrating that he is capable of facing and solving computer problems efficiently and effectively.",
        rese5: "He is a very intelligent young man with critical thinking skills. He has assisted me when I've had questions or problems related to my computer, demonstrating his ability to understand, address, and resolve these types of issues.",
    }
]

function resenaCambio(idioma){
 if(idioma == "EN"){
        titleRese.innerText = resenaDatos[0].titleRese
        rese1.innerText = resenaDatos[0].rese1
        rese2.innerText = resenaDatos[0].rese2
        rese3.innerText = resenaDatos[0].rese3
        rese4.innerText = resenaDatos[0].rese4
        rese5.innerText = resenaDatos[0].rese5
    }else{
        titleRese.innerText = resenaDatos[1].titleRese
        rese1.innerText = resenaDatos[1].rese1
        rese2.innerText = resenaDatos[1].rese2
        rese3.innerText = resenaDatos[1].rese3
        rese4.innerText = resenaDatos[1].rese4
        rese5.innerText = resenaDatos[1].rese5
    }
}