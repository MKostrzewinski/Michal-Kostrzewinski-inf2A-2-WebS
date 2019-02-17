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

  let jasDOWN = document.getElementById('jasDOWN') 

    
  jasDOWN.addEventListener('click', function(){  //Bliźniacza funkcja która tym razem zmniejsza jasność
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

let konDOWN = document.getElementById('konDOWN')  // Analogiczna funkcja do 
    
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

  let satUP = document.getElementById('satUP') 

  satUP.addEventListener('click', function(){   //Funkcja do nasycenia
  let canvasElem = document.getElementById('canvas')     // Nie jestem pewien czy tak właśnie działa nasycenie ale tak to zrozumiałem
  let ctx = canvasElem.getContext('2d');

  const PixelNumber = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);
  for (let i=0; i < PixelNumber.data.length; i += 4) {

    let avg = (PixelNumber[i]+PixelNumber[i+1]+PixelNumber[i+2])/3; 
    
    if(PixelNumber[i]>PixelNumber[i+1] && PixelNumber[i]>PixelNumber[i+2]){PixelNumber[i]+=5}
    else if(PixelNumber[i]<PixelNumber[i+1] && PixelNumber[i]<PixelNumber[i+2]){PixelNumber[i]-=5}
    else{if(PixelNumber[i]>=avg){PixelNumber[i]-=5}else{PixelNumber[i]+=5}}

    if(PixelNumber[i+1]>PixelNumber[i] && PixelNumber[i+1]>b){PixelNumber[i+1]+=5}
    else if(PixelNumber[i+1]<PixelNumber[i] && PixelNumber[i+1]<PixelNumber[i+2]){PixelNumber[i+1]-=5}
    else{if(PixelNumber[i+1]>=avg){PixelNumber[i+1]-=5}else{PixelNumber[i+1]+=5}}

    if(PixelNumber[i+2]>PixelNumber[i] && PixelNumber[i+2]>PixelNumber[i+1]){PixelNumber[i+2]+=5}
    else if(PixelNumber[i+2]<PixelNumber[i] && PixelNumber[i+2]<PixelNumber[i+1]){PixelNumber[i+2]-=5}
    else{if(PixelNumber[i+2]>=avg){PixelNumber[i+2]-=5}else{PixelNumber[i+2]+=5}}   
  }
  ctx.putImageData(PixelNumber, 0, 0);
  ctx.drawImage(this,0,0);
  })

  let satDOWN = document.getElementById('satDOWN') 

  satDOWN.addEventListener('click', function(){   //Funkcja do nasycenia
  let canvasElem = document.getElementById('canvas')     // Nie jestem pewien czy tak właśnie działa nasycenie ale tak to zrozumiałem
  let ctx = canvasElem.getContext('2d');

  const PixelNumber = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);
  for (let i=0; i < PixelNumber.data.length; i += 4) {

    let r = PixelNumber[i];
    let g = PixelNumber[i+1];
    let b = PixelNumber[i+2];
    let avg = (r+g+b)/3; 
    
    if(r>g && r>b){r+=5}else if(r<g && r<b){r-=5}else{if(r>=avg){r-=5}else{r+=5}}
    if(g>r && g>b){g+=5}else if(g<r && g<b){g-=5}else{if(g>=avg){g-=5}else{g+=5}}
    if(b>r && b>g){b+=5}else if(b<r && b<g){b-=5}else{if(b>=avg){b-=5}else{b+=5}}
  }
  ctx.putImageData(PixelNumber, 0, 0);
  ctx.drawImage(this,0,0);
  })

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let controlBorder;  
  let mysz = new Object();

  function Control(a){  
      let e = document.getElementById(a);

      let windowOffset = (function(){
          let node = e;
          let offset = {X:0, Y:0};
          do{
              offset.X += node.offsetLeft;
              offset.Y += node.offsetTop;
              node = node.offsetParent;
          } while (node);
          return offset;
      })();
      
      this.X = window.Offset.X;
      this.Y = windowOffset.Y;
      this.Width = e.width;
      this.Height = e.height;
  }

  Control.prototype.Contains = function(x,y){
      return x > this.X && y > this.Y && 
      x < this.X + this.Width && y < this.Y + this.Height;
  }


  mysz.Down = function(a){
     
      mysz.X = a.offsetX;
      mysz.Y = a.offsetY;
      canvas.addEventListener('mousemove', mysz.Move, false);
      window.addEventListener('mousemove', mysz.WindowMove, false);
  };

  mysz.Release = function(){
      canvas.removeEventListener('mousemove', mysz.Move, false);
      window.removeEventListener('mousemove', mysz.WindowMove, false);

  };

  mysz.Move = function(a){
      
      ctx.moveTo(mysz.X, mysz.Y);
      mysz.X = a.offsetX;
      mysz.Y = a.offsetY;
      ctx.lineTo(mysz.X, mysz.Y);
      ctx.stroke();
      
  };

  mysz.WindowMove = function(a){
      if(!controlBorder.Contains(a.pageX, a.pageY))  
      mysz.Release();
  }

  canvas.addEventListener('mousedown', mysz.Down, false);
  window.addEventListener('mouseup', mysz.Release, false);
  window.addEventListener('load', function(){controlBorder = new Control(controlName);}, false);    


  
  let black = document.getElementById('black');
  black.addEventListener("click", function() {
      ctx.strokeStyle = "black";
  });
  let white = document.getElementById('white');
  white.addEventListener("click", function() {
      ctx.strokeStyle = "white";
  });
  let red = document.getElementById('red');
  red.addEventListener("click", function() {
      ctx.strokeStyle = "red";
  });
  let lime = document.getElementById('lime');
  lime.addEventListener("click", function() {
      ctx.strokeStyle = "lime";
  });
  let blue = document.getElementById('blue');
  blue.addEventListener("click", function() {
      ctx.strokeStyle = "blue";
  });
  let yellow = document.getElementById('yellow');
  yellow.addEventListener("click", function() {
      ctx.strokeStyle = "yellow";
  });
  let cyan = document.getElementById('cyan');
  cyan.addEventListener("click", function() {
      ctx.strokeStyle = "cyan";
  });
  let magenta = document.getElementById('magenta');
  magenta.addEventListener("click", function() {
      ctx.strokeStyle = "magenta";
  });
  let silver = document.getElementById('silver');
  silver.addEventListener("click", function() {
      ctx.strokeStyle = "silver";
  });
  let gray = document.getElementById('gray');
  gray.addEventListener("click", function() {
      ctx.strokeStyle = "gray";
  });
  let maroon = document.getElementById('maroon');
  maroon.addEventListener("click", function() {
      ctx.strokeStyle = "maroon";
  });
  let olive = document.getElementById('olive');
  olive.addEventListener("click", function() {
      ctx.strokeStyle = "olive";
  });
  let green = document.getElementById('green');
  green.addEventListener("click", function() {
      ctx.strokeStyle = "green";
  });
  let purple = document.getElementById('purple');
  purple.addEventListener("click", function() {
      ctx.strokeStyle = "purple";
  });
  let teal = document.getElementById('teal');
  teal.addEventListener("click", function() {
      ctx.strokeStyle = "teal";
  });
  let navy = document.getElementById('navy');
  navy.addEventListener("click", function() {
      ctx.strokeStyle = "navy";
  });

