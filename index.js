
function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var segundaMsg = window.document.querySelector('div#segundaMsg') 
    var data = new Date()
    var hora = data.getHours()
    var  minutos = data.getMinutes()
    
    
    
    msg.innerHTML = `${hora}:${minutos}`
    if(hora <= 5){
        img.src = `madrugada.png`
        document.body.style.background = '#404e5a'

    }
    
    else if(hora < 12 ){ 
        img.src = 'manha.png' //Inserindo a imagem criada no JS.
        document.body.style.background = '#FFDAB9' //Alter a cor conforme o período do dia. 
        
    } else if (hora <= 18){
        //Boa tarde
        img.src = 'tarde.png' 
        document.body.style.background = '#c37974'
        
    } else if(hora < 24){
        img.src = 'noite.png'
        document.body.style.background = '#6e7c8d'
    }

}




