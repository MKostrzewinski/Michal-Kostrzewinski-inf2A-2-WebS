let kuleczka   = document.querySelector('.kuleczka');
let dziura   = document.querySelector('.dziura');
let boisko = document.querySelector('.boisko');

let czasStart = Date.now();

let maxX = boisko.clientWidth  - kuleczka.clientWidth;
let maxY = boisko.clientHeight - kuleczka.clientHeight;

function handleOrientation(event) {
  let x = event.beta; 
  let y = event.gamma; 

  if (x >  90) { x =  90};  //ma zapobiec sytuacji kiedy telefon musi być do góry nogami
  if (x < -90) { x = -90};

  x += 90;
  y += 90;

  kuleczka.style.top  = (maxX*x/90 - 10) + "px";
  kuleczka.style.left = (maxY*y/90 - 10) + "px";
  
   if(kuleczka.style.top < 10) {       //te ify mają blokować kuleczke na ściankach
        kuleczka.style.top = 10;
    }
    if(kuleczka.style.bottom < 10) {
        kuleczka.style.bottom = 10;
    }
    if(kuleczka.style.right < 10) {
        kuleczka.style.right = 10;
    }
    if(kuleczka.style.left < 10) {
        kuleczka.style.left = 10;
    }

    let kuleczkaPosition = kuleczka.getBoundingClientRect();           // pobiera pozycje z elementu kuleczka
    let dziuraPosition = dziura.getBoundingClientRect();              // pobiera położenie elementu dziura
  
      //Zakończenie
    if((kuleczkaPosition.top <= dziuraPosition.top) && (kuleczkaPosition.bottom >= dziuraPosition.bottom) && (kuleczkaPosition.left >= dziuraPosition.left) &&
    (kuleczkaPosition.right <= dziuraPosition.right)) {
        let czas = Date.now() - czasStart; //podaje czas
        alert("Wygrana! \n Twój czas : " + czas);
    }
}
window.addEventListener('deviceorientation', handleOrientation);
