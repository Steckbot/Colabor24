// let border = 20;
let anzahlSlider;
let abstandSlider;
let textSlider;
let rotationAngles = [];
let randomWords = [];

function setup() {
  background(220);
  noStroke();
  textAlign(CENTER);

  anzahlSlider = createSlider(1, 13, 3);
  abstandSlider = createSlider(2, 60, 2);
  textSlider = createSlider(4, 30, 10);

  for (let i = 0; i < 13 * 13; i++) {
    rotationAngles[i] = random(TWO_PI);
    let words = ["Banana", "Fish", "Hobbit", "Racoon" ]; 
    randomWords[i] = random(words);
  }



}

function draw() {
  createCanvas(600, 600);
  anzahl = anzahlSlider.value();
  abstand = abstandSlider.value();
  tSize = textSlider.value();



  let groesse = width / anzahl - abstand + abstand / anzahl;
  // let groesse = width / anzahl - abstand + abstand / anzahl + 10 * noise(0.005 * frameCount);;


  textSize(tSize);

  let colorShift = 10 * noise(0.005 * frameCount);



  for (let i = 0; i < anzahl; i++) {
    for (let j = 0; j < anzahl; j++) {
      let x = i * groesse + i * abstand;
      let y = j * groesse + j * abstand;
      let textX = x + groesse / 2;
      let textY = y + groesse / 2 + tSize / 3 ;

      fill(200 - i * 3 * colorShift, 100, 255);
      
      rect(x, y, groesse, groesse);

      fill(255);

      push();
      translate(textX, textY);
      rotate(rotationAngles[i + j * 13]);
      text(randomWords[i + j * 13], 0, 0); 
      pop(); 

    }
  }
  console.log("anzahl", anzahl);
  console.log("anzahlSlider", anzahlSlider);



}


