/*let plutno
let kontener
let canvas, ctx, starterImageData
let sliderContrast, sliderBrightness, sliderSaturation
let imgStat = '1.jpg'

function AppStart(){
    

    kontener = document.querySelector("#kontener")

    plutno =document.querySelector("#plutno")
    ctx = canvas.getContext("2d")

    sliderContrast = document.querySelector("contrast")
    sliderContrast.addEventListener("mousemove",contrastChange)
    sliderBrightness.addEventListener("mousemove", brightnessChange)
    sliderSaturation.addEventListener("#saturation")

    img = document.createElement('img')
    img.src = imgStat
    img.crossOrigin = "Anonymous"
 
    img.addEventListener('load', function(e){
        ctx.drawImage(e.target, 0, 0, 600, 400)
        starterImageData = ctx.getImageData(0,0,600,400)
    })
} */
document.getElementById('upload').onchange = function(e) {
    let img = new Image();
    img.onload = draw;
    img.src = URL.createObjectURL(this.files[0]);
  };
  function draw() {
    let canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0);
  }
