const menu = document.querySelectorAll("li")
//Selectores de contenidos del menu
const inicio = document.getElementById("contenedorInicio")
const sobremi = document.getElementById("sobremi")
const proyectos = document.getElementById("proyect")
//const intereses = document.getElementById()
const contactame = document.getElementById("contacto")



menu.forEach(item => {
    item.addEventListener("click", (e) => {

        let element = e.currentTarget.id
       
        switch (element) {
            case "inicio":
                contactame.style.display = "none"
                sobremi.style.display = "none"
                proyectos.style.display = "none"
                inicio.style.display = "flex"
                break;
            case "sobre_Mi":
                inicio.style.display = "none"
                contactame.style.display = "none"
                proyectos.style.display = "none"
                sobremi.style.display = "flex"
                break;
            case "contactame":
                inicio.style.display = "none"
                sobremi.style.display = "none"
                proyectos.style.display = "none"
                contactame.style.display = "flex"
                break;

            case "proyectos":
                inicio.style.display = "none"
                sobremi.style.display = "none"
                contactame.style.display = "none"
                proyectos.style.display = "flex"

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

document.getElementById("contacenviar").addEventListener("click",event =>{
      event.preventDefault()
    const idioma = localStorage.getItem("idioma")
    let titulo = ""
    let frase = ""
    if(idioma == "ES"){
        titulo = alertError[0].titulo
        frase = alertError[0].frase
    }else{
        titulo = alertError[1].titulo
        frase = alertError[1].frase
    }
    
  
        Swal.fire({
        title: titulo,
        text: frase,
        icon:"error",
        background: "#111421",
        color: "#e6efff"
    })
})