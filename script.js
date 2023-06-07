function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver  light mode, adicionar  a imagem light
        img.setAttribute("src", "./assets/joel_lopes_light.jpg")
    
    }   else {
        // se tiver  sem light mode, manter a foto normal
        img.setAttribute("src", "./assets/joe_Lopes.jpg")
    }
}
    








// exemplo de condicional...   
 //   if(html.classList.contains('light')) {
 //       html.classList.remove('light')
 //   } else {
 //       html.classList.add('light')
 //   }