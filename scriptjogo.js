var height = 0
var width = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500
 
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function redimencionatela(){
    height = window.innerHeight
    width = window.innerWidth
    
}

redimencionatela()

var cronometro = setInterval(function() {

    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
      }   
}, 1000)

function positionRandom() {
    //remove o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
        window.location.href = 'gameover.html'
        }
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas++
    }

    var posicaoX = Math.floor(Math.random() * width - 90)
    var posicaoY = Math.floor(Math.random() * height - 90)

    posicaoX = posicaoX < 0 ? 0: posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY

    //criar o elemento html mosquito na tela 
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoRandom() + ' ' + olharRandom()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoRandom() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
    }
}

function olharRandom(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}