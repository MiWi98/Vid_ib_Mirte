var buttonJump = document.getElementById('button_jump');
var buttonVliegje = document.getElementById('button_vliegje');
var buttonBongo = document.getElementById('button_bongo');
var video = document.getElementById('video');


buttonJump.addEventListener('click', speelJump);
buttonVliegje.addEventListener('click', speelVliegje);
buttonBongo.addEventListener('click', speelBongo);

function speelJump() {
    video.src = "img/Jump.mp4";
    console.log('run jump');
}

function speelVliegje() {
    video.src = "img/vliegje.mp4";
    console.log('run vliegje');
}

function speelBongo() {
    video.src = "img/Bongo.mp4";
    console.log('sup bongo');
}