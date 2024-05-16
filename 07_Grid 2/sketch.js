let anzahl = 100;
let rectHeight
let rectWidth;
// let sliderX

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(0);
  frameRate(1)


  // sliderX = createSlider(2,20);

}

function draw() {
  background(255);
  let startX = 0;

    // x = sliderX.value();

  for (let i = 0; i < anzahl; i++){
    rectHeight = random (50,200);
    rectWidth = random(30,50);

    // rectHeight = 10 * sin(frameCount * 0.001);
    // rectWidth = 10 * sin(frameCount * 0.001);
    
    // rectHeight = 20;
    // rectWidth = 20;



    // rectHeightAbstand = random (2,50);
        // rectHeightAbstand = 10 * sin(frameCount * 0.001);
        // rectHeightAbstand = 50;




      for (let j = 1; j < anzahl/2; j++){
      rect(startX, j*rectHeight*2-60, rectWidth, rectHeight);

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
    
