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
  
  let nagrywa = false;
  let nagrywa2 = false;
  let nagrywa3 = false;
  let nagrywa4 = false;
  let startNagrywania = 0;
  let startNagrywania2 = 0;
  let startNagrywania3 = 0;
  let startNagrywania4 = 0;
  
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
      110: "tom",
      118: "tom",
  
      81: "boom",
      87: "clap",
      69: "hihat",
      82: "kick",
      85: "openhat",
      73: "ride",
      79: "snare",
      80: "tink",
      78: "tom",
      86: "tom",
  }
  
  function appStart() {
      window.addEventListener('keypress', grajDzwiek)
  
      document.querySelector('#nagrywaj').addEventListener('click', nagrywaj)
      document.querySelector('#graj').addEventListener('click', odtwarzaj)

      document.querySelector('#nagrywaj2').addEventListener('click', nagrywaj2)
      document.querySelector('#graj2').addEventListener('click', odtwarzaj2)

      document.querySelector('#nagrywaj3').addEventListener('click', nagrywaj3)
      document.querySelector('#graj3').addEventListener('click', odtwarzaj3)

      document.querySelector('#nagrywaj4').addEventListener('click', nagrywaj4)
      document.querySelector('#graj4').addEventListener('click', odtwarzaj4)
  }
    
    function nagrywaj (e) {
      startNagrywania = Date.now()
      nagrywa = !nagrywa
      e.target.innerHTML = nagrywa ? 'Stop' : 'Nagrywaj' 
    }

    function nagrywaj2 (e) {
      startNagrywania2 = Date.now()
      nagrywa2 = !nagrywa2
      e.target.innerHTML = nagrywa2 ? 'Stop' : 'Nagrywaj' 
    }

    function nagrywaj3 (e) {
      startNagrywania3 = Date.now()
      nagrywa3 = !nagrywa3
      e.target.innerHTML = nagrywa3 ? 'Stop' : 'Nagrywaj' 
    }

    function nagrywaj4 (e) {
      startNagrywania4 = Date.now()
      nagrywa4 = !nagrywa4
      e.target.innerHTML = nagrywa4 ? 'Stop' : 'Nagrywaj' 
    }
    
    function odtwarzaj () {
      kanal1.forEach(sound => {
        setTimeout(
          () => graj(sound.name), sound.time
        )
      })
    }

    function odtwarzaj2 () {
      kanal2.forEach(sound => {
        setTimeout(
          () => graj(sound.name), sound.time
        )
      })
    }

    function odtwarzaj3 () {
      kanal3.forEach(sound => {
        setTimeout(
          () => graj(sound.name), sound.time
        )
      })
    }

    function odtwarzaj4 () {
      kanal4.forEach(sound => {
        setTimeout(
          () => graj(sound.name), sound.time
        )
      })
    }

 /**
 * @param {*} a       
 */

    function grajDzwiek (a) {
      const nazwaDzwieku = dzwieki[a.keyCode];
      
      graj(nazwaDzwieku);
    
    if(nagrywa) {
        kanal1.push(
          {
            name: nazwaDzwieku,
            time: Date.now() - startNagrywania
          }
        )
      }

      if(nagrywa2) {
        kanal2.push(
          {
            name: nazwaDzwieku,
            time: Date.now() - startNagrywania2
          }
        )
      }

      if(nagrywa3) {
        kanal3.push(
          {
            name: nazwaDzwieku,
            time: Date.now() - startNagrywania3
          }
        )
      }

      if(nagrywa4) {
        kanal4.push(
          {
            name: nazwaDzwieku,
            time: Date.now() - startNagrywania4
          }
        )
      }

      switch(nazwaDzwieku){      //Podmienia kolor granych dźwięków
        case "boom": 
        kq.style.backgroundColor = 'silver'
        setTimeout(function(){ kq.style.backgroundColor = 'azure'; }, 200);
        break;

        case "clap": 
        kw.style.backgroundColor = 'silver'
        setTimeout(function(){ kw.style.backgroundColor = 'azure'; }, 200);
        break;

        case "hihat": 
        ke.style.backgroundColor = 'silver'
        setTimeout(function(){ ke.style.backgroundColor = 'azure'; }, 200);
        break;

        case "kick": 
        kr.style.backgroundColor = 'silver'
        setTimeout(function(){ kr.style.backgroundColor = 'azure'; }, 200);
        break;

        case "openhat": 
        ku.style.backgroundColor = 'silver'
        setTimeout(function(){ ku.style.backgroundColor = 'azure'; }, 200);
        break;

        case "ride": 
        ki.style.backgroundColor = 'silver'
        setTimeout(function(){ ki.style.backgroundColor = 'azure'; }, 200);
        break;

        case "snare": 
        ko.style.backgroundColor = 'silver'
        setTimeout(function(){ ko.style.backgroundColor = 'azure'; }, 200);
        break;

        case "tink": 
        kp.style.backgroundColor = 'silver'
        setTimeout(function(){ kp.style.backgroundColor = 'azure'; }, 200);
        break;

        case "tom": 
        space.style.backgroundColor = 'silver'
        setTimeout(function(){ space.style.backgroundColor = 'azure'; }, 200);
        break;
      }


    }

    
  
  function graj(nazwaDzwieku) {
    const audioDOM = document.querySelector(`#${nazwaDzwieku}`);
    audioDOM.currentTime = 0;
    audioDOM.play();
  }

