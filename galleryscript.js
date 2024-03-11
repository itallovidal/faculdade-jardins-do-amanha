function vermais(){
    let fotosOcultas = document.querySelectorAll("main article #grid .desativado")
    let btn = document.querySelector(".btn-style")
    console.log(fotosOcultas)

    if(fotosOcultas.length != 0)
    {
        fotosOcultas.forEach( (element) =>{

            element.classList.remove("desativado")
            btn.textContent = "Fazer Orçamento"
        })
    }
    else
    {
        window.location.href = 'form.html'
    }

}