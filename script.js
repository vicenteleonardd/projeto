function toggleMode() {
     const html = document.documentElement
     html.classList.toggle('light')



     const img = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')

    } else{
        img.setAttribute('src', './assets/avatar.png')
    }

    const blasd = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        blasd.setAttribute('alt', 'Foto do mano de oculos')
    } else{
        blasd.setAttribute('alt', 'Foto do bolsonaro ao lado de Pablo Marçal')
    }



    

}