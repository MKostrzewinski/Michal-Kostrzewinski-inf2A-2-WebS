document.getElementById('upload').onchange = function(e) {  //Pobieranie obrazka za pomocą getElement.OneChange
    let img = new Image();
    img.onload = draw;
    img.src = URL.createObjectURL(this.files[0]);
  };
  function draw() {
    let canvas = document.getElementById('canvas');
    //canvas.width = this.width;
    //canvas.height = this.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0,800,450);
  }

  let jasUP= document.getElementById('jasUP')  // jasUP to id buttona z html


  jasUP.addEventListener('click', function(){   // przypisuje funkcje do zdeklarowanej wyzej zmiennej jasUP
  let canvasElem = document.getElementById('canvas') // przypisuje zmienna do elementu html
  let ctx = canvasElem.getContext('2d');

  const PixelNumber = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height); // zmienna w ktorej przechowuje dane z pikseli

  for (let i=0; i < PixelNumber.data.length; i += 4) {  //  pętla która zwiększa kazdy piksel o 5 (tak zwiększy jasność)
    PixelNumber.data[i] =   5 + PixelNumber.data[i];  //  [i] = Red
    PixelNumber.data[i+1] = 5 + PixelNumber.data[i+1]; // [i+1] = Green
    PixelNumber.data[i+2] = 5 + PixelNumber.data[i+2]; // [i+2] = Blue

}

    ctx.putImageData(PixelNumber, 0, 0); // Wpisuje piksele do canvasa
    ctx.drawImage(this, 0, 0) // rysuje nowy rysunek


  } )

  let jasDOWN = document.getElementById('jasDOWN') //Bliźniacza funkcja która tym razem zmniejsza jasność

    
  jasDOWN.addEventListener('click', function(){
  let canvasElem = document.getElementById('canvas')
  let ctx = canvasElem.getContext('2d');

  const PixelNumber = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);

  for (let i=0; i < PixelNumber.data.length; i += 4) {
    PixelNumber.data[i] = PixelNumber.data[i] - 5; 
    PixelNumber.data[i+1] = PixelNumber.data[i+1] - 5; // tym razem zmniejsza piksele o 5 
    PixelNumber.data[i+2] = PixelNumber.data[i+2] - 5;
    
}
    ctx.putImageData(PixelNumber, 0, 0);
    ctx.drawImage(this, 0, 0)
  
  } )

  let konUP = document.getElementById('konUP')  // Funkcja zwiekszająca kontrast
    
  konUP.addEventListener('click', function(){
  let canvasElem = document.getElementById('canvas')
  let ctx = canvasElem.getContext('2d');

  const PixelNumber = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);

  for (let i=0; i < PixelNumber.data.length; i += 4) {

    if(PixelNumber.data[i]<=128){                   // Dodaje 2 punkty do każdego piksela większego od 128 i 
      PixelNumber.data[i] = PixelNumber.data[i] -2;        // analogicznie odejmuje 2 punkty  od mniejszego
    }else{
      PixelNumber.data[i] = PixelNumber.data[i] + 2;
    };
    if(PixelNumber.data[i+1]<=128){
      PixelNumber.data[i+1] = PixelNumber.data[i+1] -2;   // Wiem że te ify napisałem jak idiota bo powinienem użyć suwaka ale przyjąłem taką 
    }else{                                                //  koncepcje że będę używał buttonów i udało mi się wymyślić coś takiego :)
      PixelNumber.data[i+1] = PixelNumber.data[i+1] + 2;
    };
    if(PixelNumber.data[i+2]<=128){
      PixelNumber.data[i+2] = PixelNumber.data[i+2] -2;
    }else{
      PixelNumber.data[i+2] = PixelNumber.data[i+2] + 2;
    };   
}
  ctx.putImageData(PixelNumber, 0, 0);
  ctx.drawImage(this, 0, 0)
})

let konDOWN = document.getElementById('konDOWN')  // Analogiczna funkcja 
    
konDOWN.addEventListener('click', function(){
let canvasElem = document.getElementById('canvas')
let ctx = canvasElem.getContext('2d');

const PixelNumber = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);

for (let i=0; i < PixelNumber.data.length; i += 4) {

  if(PixelNumber.data[i]<=128){ 
    PixelNumber.data[i] = PixelNumber.data[i] + 2;
  }else{
    PixelNumber.data[i] = PixelNumber.data[i] - 2;
  };
  if(PixelNumber.data[i+1]<=128){
    PixelNumber.data[i+1] = PixelNumber.data[i+1] + 2;
  }else{         
    PixelNumber.data[i+1] = PixelNumber.data[i+1] - 2;
  };
  if(PixelNumber.data[i+2]<=128){
    PixelNumber.data[i+2] = PixelNumber.data[i+2] +2;
  }else{
    PixelNumber.data[i+2] = PixelNumber.data[i+2] - 2;
  };   
}
ctx.putImageData(PixelNumber, 0, 0);
ctx.drawImage(this, 0, 0)
})