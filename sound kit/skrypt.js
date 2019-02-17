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

  document.addEventListener('DOMContentLoaded', appStart)


  const kanal1 = []
  const kanal2 = []
  const kanal3 = []
  const kanal4 = []
  
  let nagrywa = false
  let startNagrywania = 0
  
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
      32: "tom",
  
      81: "boom",
      87: "clap",
      69: "hihat",
      82: "kick",
      85: "openhat",
      73: "ride",
      79: "snare",
      80: "tink"
  }
  
  function appStart() {
      window.addEventListener('keypress', grajDzwiek)
  
      document.querySelector('#nagrywaj').addEventListener('click', nagrywaj)
      document.querySelector('#graj').addEventListener('click', odtwarzaj)
  }
    
    function nagrywaj (e) {
      startNagrywania = Date.now()
      nagrywa = !nagrywa
      e.target.innerHTML = nagrywa ? 'Stop' : 'Nagrywaj' 
    }
    
    function odtwarzaj () {
      kanal1.forEach(sound => {
        setTimeout(
          () => graj(sound.name), sound.time
        )
      })
    }

 /**
 * @param {*} a
 */
    function grajDzwiek (a) {
      const nazwaDzwieku = dzwieki[a.keyCode]
      
      graj(nazwaDzwieku);
    
    if(nagrywa) {
        kanal1.push(
          {
            name: nazwaDzwieku,
            time: Date.now() - startNagrywania
          }
        )
      }
    }
    
  
  function graj(nazwaDzwieku) {
    const audioDOM = document.querySelector(`#${nazwaDzwieku}`);
    audioDOM.currentTime = 0;
    audioDOM.play();
  }
