let musica = document.querySelector('audio')


// Eventos
document.querySelector('.btn-play').addEventListener('click',tocarMusica)

document.querySelector('.btn-pause').addEventListener('click',pausarMusica)

musica.addEventListener('timeupdate',attBarra)


// Funções
function tocarMusica(){
    musica.play()
    document.querySelector('.btn-pause').style.display = 'block'
    document.querySelector('.btn-play').style.display = 'none'
}

function pausarMusica(){
    musica.pause()
    document.querySelector('.btn-pause').style.display = 'none'
    document.querySelector('.btn-play').style.display = 'block'
}

function attBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'

}
