function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver  light mode, adicionar  a imagem light
        img.setAttribute("src", "./assets/avatar-dani.png")
    
    }   else {
        // se tiver  sem light mode, manter a foto normal
        img.setAttribute("src", "./assets/avatar-dani-night.png")
    }
}
    








// exemplo de condicional...   
 //   if(html.classList.contains('light')) {
 //       html.classList.remove('light')
 //   } else {
 //       html.classList.add('light')
 //   }