console.log('hello');

let songIndex = 0;
let audioElement = new Audio('songs/Doom_theme.mp3');
let mPlay = document.getElementById('mPlay');
let mPBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songs = [
    {songName : 'Doom Theme', filePath: 'songs/Doom_theme.mp3', coverPath: 'covers/cover1.png'},
    {songName : 'Doom Theme', filePath: 'songs/Doom_theme.mp3', coverPath: 'covers/cover1.png'},
    {songName : 'Doom Theme', filePath: 'songs/Doom_theme.mp3', coverPath: 'covers/cover1.png'},
    {songName : 'Doom Theme', filePath: 'songs/Doom_theme.mp3', coverPath: 'covers/cover1.png'},
    {songName : 'Doom Theme', filePath: 'songs/Doom_theme.mp3', coverPath: 'covers/cover1.png'},
    {songName : 'Doom Theme', filePath: 'songs/Doom_theme.mp3', coverPath: 'covers/cover1.png'}
]

//let audioElement = new Audio('Doom theme.mp3');

//handle play /pause click
mPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        mPlay.classList.remove('fa-2x fa-solid fa-play');
        mPlay.classList.add('fa-2x fa-solid fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        mPlay.classList.remove('fa-2x fa-solid fa-pause');
        mPlay.classList.add('fa-2x fa-solid fa-play');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    mPBar.value = progress;
})

mPBar.addEventListener("change",()=>{
    audioElement.currentTime = mPBar.value * audioElement.duration / 100;
})