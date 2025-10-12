
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