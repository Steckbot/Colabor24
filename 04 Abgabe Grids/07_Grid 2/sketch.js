let anzahl = 100;
let rectHeight
let rectWidth;
// let sliderX
let randomZahlen = [20,40,20,50,100,20,100,50,100,20];

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(0);
  // frameRate(10)
  noLoop();


  // sliderX = createSlider(2,20);

}

function draw() {
  background(255);
  let startX = 0;

    // x = sliderX.value();

  for (let i = 0; i < anzahl; i++){
    rectHeight = random (5,60);
    rectWidth = random(3,15);

    // rectHeight2 = 10 * sin(frameCount * 0.05) +40;

    let rectHeightAbstand = random (50,130);


      for (let j = 1; j < anzahl/2; j++){
      rect(startX, j*rectHeightAbstand -60, rectWidth, rectHeight);
     console.log("startX",startX);

    }       
   startX = startX + rectWidth

  }



}


// let sliderX
// let sliderY


//   sliderX = createSlider(20,20);
//   sliderY = createSlider(20,50);


//   x = sliderX.value();

//     y = sliderY.value();

//     for (let j = 0; j < anzahl; j++){
//     rect(i* x, j*y*2, x, y);
    
