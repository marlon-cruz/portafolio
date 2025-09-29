
const btnIdioma = document.getElementById('idioma')
const textIdioma = document.getElementById('textIdioma')
btnIdioma.addEventListener("click", event =>{
    event.preventDefault()
if (!(typeof window.localStorage !== 'undefined')) {
  localStorage.setItem("idioma", "ES");
}
    const idioma = localStorage.getItem("idioma");
    console.log(idioma)
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

