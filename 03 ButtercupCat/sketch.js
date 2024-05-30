let mic;
let midi_out;
let midi_enabled = false

let img
let mySound;
let figure;
let catImg;

let startC1 = 22
let startC2 = 15
let startC3 = 214
let randomC = [200,15]

let pg;

function preload(){
  img = loadImage("desktop.png");
  figure = loadModel("Figure.obj");
  cat = loadModel("12221_Cat_v1_l3.obj", false);
  catImg = loadImage("Cat_diffuse.jpg");
  soundFormats("mp3");
  mySound = loadSound('buttercup.mp3');
}






function setup() {
  
  let cnv = createCanvas(innerWidth, innerHeight - 10, WEBGL);
  cnv.mousePressed(toggleSound);
  
  amplitude = new p5.Amplitude();
  micAmplitude = new p5.Amplitude();
  
  mic = new p5.AudioIn();

  fftsound = new p5.AudioIn();
  fftsound.start();

  fft = new p5.FFT(0.8, 128);
  fft.setInput(fftsound)



  background(50);
  pg = createGraphics(innerWidth, innerHeight, WEBGL);


  // mic.connect();

  amplitude.setInput(mySound);

  mySound.play();





}


function draw() {

  let spectrum = fft.analyze();
  let waves = fft.waveform()
  noStroke();
  fill('#3f3')
  // for (let i = 0; i < spectrum.length; i++) {
    // let x = map(i, 0, spectrum.length, 0, width);
    // h = -height + map(spectrum[i], 0, 255, height, 200);
    // // rect(x, height, width / spectrum.length, h)
    // // rect(0, 300, 20, h)
    // translate(0,h/10s,0);

  // }

  // beginShape()
  
  // noFill()
  // stroke('#f3f')
  // strokeWeight(3)
  // for (let i = 0; i < waves.length; i++) {
  //   let x = map(i, 0, waves.length, 0, width);
  //   let y = map(waves[i], -1, 1, 0, height)
  //   vertex(x, y)
  // }
  // endShape()
  
  
  
  
    
  let micLevel = micAmplitude.getLevel();
  let soundLevel = amplitude.getLevel();
  
  pg.background(startC1, startC2, startC3, 100);

  strokeWeight(1)
  noStroke();
  fill(0)
  lights();
  normalMaterial();



  // push();
  // normalMaterial();  
  // translate(0, 120, 0);
  // rotateY(frameCount * 0.02);
  // rotateX(frameCount * 0.00);
  // rotateZ(frameCount * 0.00);
  // if (soundLevel > 0.125){
  //   translate(0, 0, 250);
  //   rotateY(0);
  //   rotateX(frameCount * 0.05);
  //   rotateZ(frameCount * 0.05);
  // }
  // scale(20);
  // rotate(PI);
  // model(figure);
  // pop();
  
  

  push();
  normalMaterial();
  translate(0, 120, 0);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.00);
  rotateZ(frameCount * 0.00);
  
  if (soundLevel > 0.12){
    translate(0, 0, 350);
    rotateY(0);
    rotateX(frameCount * 0.05);
    rotateZ(frameCount * 0.05);

    // scale(3,0.9,1,1 * soundLevel * 2);

    let mapSoundLevel = map(soundLevel,0, 1, 0.5,4);
    scale(3,0.9,1 * mapSoundLevel);
  }
console.log(soundLevel);

  // if (soundLevel > 0.22){
  //   scale(3,0.9,1,10);
  // }

  // if (soundLevel > 0.22){
  //   scale(3,0.9,1,3 * soundLevel * 2);
  // }



  translate(0,0,0);
  scale(5);
  rotateX(HALF_PI);
  rotateZ(PI);
  texture(catImg);
  model(cat);
  pop();
  

  // let reverseNum = 1;
  //   startC1 += reverseNum;



  if (soundLevel > 0.2){
    pg.background(startC1, startC2, startC3, 0);
  }

// if (startC1 === 255) {
//   reverseNum = -1
//   if (startC1 === 0) {
//   reverseNum = +1  
//   }
// }

// if (startC1 < 1) {
//   startC1 -= 1
// }

// if (startC2 > 255) {
//   startC2 = 0;
// }

// if (startC3 > 255) {
//   startC3 = 0;
// }


  let imgX = width / 2 - pg.width / 2;
  let imgY = height / 2 - pg.height / 2;

  imgX -= pg.width / 2;
  imgY -= pg.height / 2;

  image(pg, imgX, imgY);


}


function toggleSound(){
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}
