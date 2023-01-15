let musicas = [
    {
        titulo:'Guitar solo',
        artista:'Victor Hugo',
        src:'musicas/368 - Dyalla.mp3',
        img:'assets/img/musica1.jpg'
    },
    {
        titulo:'Hip hop solo',
        artista:'São pedro',
        src:'musicas/ILY Baby - Dyalla.mp3',
        img:'assets/img/musica2.jpg'
    },
    {
        titulo:'Samba',
        artista:'Dois joão',
        src:'musicas/Ringside - Dyalla.mp3',
        img:'assets/img/musica3.jpg'
    },
]


let musica = document.querySelector('audio')
let indexMusica = 0

let duracaoMusica = document.querySelector('.fim')
let trocaImg = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao p')

renderizarMusica(indexMusica)


// Eventos
document.querySelector('.btn-play').addEventListener('click',tocarMusica)

document.querySelector('.btn-pause').addEventListener('click',pausarMusica)

musica.addEventListener('timeupdate',attBarra)

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica --
    if(indexMusica < 0){
        indexMusica = 2
    }
    renderizarMusica(indexMusica)
    document.querySelector('.btn-pause').style.display = 'none'
    document.querySelector('.btn-play').style.display = 'block'
})

document.querySelector('.posterior').addEventListener('click', () =>{
    indexMusica ++
    if(indexMusica > 2){
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
   
    document.querySelector('.btn-pause').style.display = 'none'
    document.querySelector('.btn-play').style.display = 'block'
})


// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        trocaImg.src = musicas[index].img;
         duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration))
    });
}


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
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosMinutos(Math.floor(musica.currentTime))
}

function segundosMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+':'+campoSegundos
}


