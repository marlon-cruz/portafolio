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
        console.log(element)
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

