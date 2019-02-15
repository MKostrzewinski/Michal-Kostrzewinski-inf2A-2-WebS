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

  const myImgData = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height); // zmienna w ktorej przechowuje dane z pikseli

  for (let i=0; i < myImgData.data.length; i += 4) {  //  pętla która zwiększa kazdy piksel o 5 (tak zwiększy jasność)
    myImgData.data[i] =   5 + myImgData.data[i];  //  [i] = Red
    myImgData.data[i+1] = 5 + myImgData.data[i+1]; // [i+1] = Green
    myImgData.data[i+2] = 5 + myImgData.data[i+2]; // [i+2] = Blue

}

    ctx.putImageData(myImgData, 0, 0); // Wpisuje piksele do canvasa
    ctx.drawImage(this, 0, 0) // rysuje nowy rysunek


  } )

  let jasDOWN = document.getElementById('jasDOWN') //Bliźniacza funkcja która tym razem zmniejsza jasność

    
  jasDOWN.addEventListener('click', function(){
  let canvasElem = document.getElementById('canvas')
  let ctx = canvasElem.getContext('2d');

  const myImgData = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);

  for (let i=0; i < myImgData.data.length; i += 4) {
    myImgData.data[i] = myImgData.data[i] - 5; 
    myImgData.data[i+1] = myImgData.data[i+1] - 5; // tym razem zmniejsza piksele o 5 
    myImgData.data[i+2] = myImgData.data[i+2] - 5;
    
}
    ctx.putImageData(myImgData, 0, 0);
    ctx.drawImage(this, 0, 0)
  
  } )

  /*let konUP = document.getElementById('konUP')

    
  konUP.addEventListener('click', function(){
  let canvasElem = document.getElementById('canvas')
  let ctx = canvasElem.getContext('2d');

  const myImgData = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);

  //
  // fora napisz
  //
  //

  })*/