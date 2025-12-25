const menu = document.querySelectorAll("li")
//Selectores de contenidos del menu
const inicio = document.getElementById("contenedorInicio")
const sobremi = document.getElementById("sobremi")
const proyectos = document.getElementById("proyect")
//const intereses = document.getElementById()
const contactame = document.getElementById("contacto")

const recomendaciones = document.getElementById("recomendaciones")



menu.forEach(item => {
    item.addEventListener("click", (e) => {

        let element = e.currentTarget.id
       
        switch (element) {
            case "inicio":
                contactame.style.display = "none"
                sobremi.style.display = "none"
                proyectos.style.display = "none"
                recomendaciones.style.display = "none"
                inicio.style.display = "flex"
                break;
            case "sobre_Mi":
                inicio.style.display = "none"
                contactame.style.display = "none"
                proyectos.style.display = "none"
                recomendaciones.style.display = "none"
                sobremi.style.display = "flex"
                break;
            case "contactame":
                inicio.style.display = "none"
                sobremi.style.display = "none"
                proyectos.style.display = "none"
                recomendaciones.style.display = "none"
                contactame.style.display = "flex"

                break;
             case "Recommendations":
                inicio.style.display = "none"
                sobremi.style.display = "none"
                contactame.style.display = "none"
                proyectos.style.display = "none"
                recomendaciones.style.display = "flex"
                
                break;

            case "proyectos":
                inicio.style.display = "none"
                sobremi.style.display = "none"
                contactame.style.display = "none"
                proyectos.style.display = "flex"
                recomendaciones.style.display = "none"

                break;
            default:
                break;
        }

    })
})

const btnSoftware = document.getElementById('btnsoftware')
const btnSiteWeb = document.getElementById('btnSitioWeb')
const btnAppMovil = document.getElementById('btnAppMovil')
const btnAppWeb = document.getElementById('btnAppWeb')

function setColorBtn(){
    btnSoftware.style.backgroundColor = "#1f253f"
    btnSiteWeb.style.backgroundColor = "#1f253f"
    btnAppMovil.style.backgroundColor = "#1f253f"
    btnAppWeb.style.backgroundColor = "#1f253f"
}

function viewProyect(e){
   setColorBtn()
    const nodo = e.target;
    let index = e.target.value
    localStorage.setItem("proyecIndex", index);
    nodo.style.backgroundColor = '#111421'


}
const alertError = [
    {
        titulo: "Error de formulario",
        frase:'El formulario se encuentra inhabilitado temporalmente' ,
    },
    {
        titulo: "Form error",
        frase: 'The form is temporarily disabled',
    }
]

function zoomImagen(event){
    let elemento = event.target;
    if (elemento.tagName === 'IMG') {
       elemento = elemento.parentElement; 
    }
    const tieneClase = elemento.classList.contains('imagen_zoom');
    if (tieneClase) {
        elemento.classList.remove('imagen_zoom')
    } else {
        elemento.classList.add('imagen_zoom')
    }
}