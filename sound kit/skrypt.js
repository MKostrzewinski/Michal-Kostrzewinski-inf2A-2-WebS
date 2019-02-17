//Stary kod

/*window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.play()
    audio.currentTime = 0
})

let zapis = 0;

document.querySelector('#nagrywanie').addEventListener('click', function (e){
    zapis = Date.now()
    nagrywa = !nagrywa
  })*/

document.addEventListener('DOMContentLoaded', Start)

const dzwieki = {
    //małe litery
    113: "boom",
    119: "clap",
    101: "hihat",
    114: "kick",
    117: "openhat",
    105: "ride",
    111: "snare",
    112: "tink",

    //Duże litery 
    81: "boom",
    87: "clap",
    69: "hihat",
    82: "kick",
    85: "openhat",
    73: "ride",
    79: "snare",
    80: "tink",
    32: "tom"
}

    function Start() {
        window.addEventListener('keypress', grajDzwiek)
}

    function grajDzwiek (a) {
        const nazwaDzwieku = dzwieki[a.keyCode]    
         graj(nazwaDzwieku);
  
  }
  
function graj(nazwaDzwieku) {
  const audioDOM = document.querySelector(`#${nazwaDzwieku}`);
  audioDOM.currentTime = 0;
  audioDOM.play();
}