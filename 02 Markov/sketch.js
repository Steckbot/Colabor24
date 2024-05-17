let lines,
  markov,
  data1,
  data2,
  x = 100,
  y = 290;

  x1 = 50
  y1 = 50

  let rand1;
  let rand2;
  let rand3;

  let baseTextSize = 21;
  let hoverTextSize = 32;
  let hoverRadius = 140;

function preload() {
  data1 = loadStrings("data/alle.txt");
  data2 = loadStrings("data/alle2.txt");
}

function setup() {
  createCanvas(600, 600);
  
  textFont("Times New Roman");
  textLeading(26);
  textAlign(CENTER);

  rand1 = random(150);
  rand2 = random(150);
  rand3 = random(255);

  lines = ["click to (re)generate"];

  // create a markov model w' n=4  
  
  markov = RiTa.markov(3);

  // load text into the model
  markov.addText(data1.join(" "));
  markov.addText(data2.join(" "));

  text(lines.join(" "), x, y, 420, 420);


}

function drawText() {
  background(rand1,rand2,rand3);

  let currentX = x1;
  let currentY = y1;



  textSize(baseTextSize);

  for (let i = 0; i < lines.length; i++) {
    let wörter = lines[i].split("");
    // console.log("alleZeichen",alleZeichen)
    for (let j = 0; j < wörter.length; j++){
      let wort = wörter[j];
      // console.log("zeichen",zeichen)
      for (let k = 0; k < wort.length; k++){
        let zeichen = wort[k];
        let distance = dist(mouseX, mouseY, currentX, currentY);
        console.log("distance",distance)


        if (distance < hoverRadius) {
          textSize(hoverTextSize);
          fill(255);

        } else {
          textSize(baseTextSize);
          fill(0);
        }

        

        text(zeichen, currentX, currentY);
        currentX += textWidth(zeichen);

        if (k === wörter.length - 1 && j < words.length - 1) {
          currentX += textWidth(" ");
        }
      }

      if (currentX > width - 50) {
        currentX = x;
        currentY += textLeading();
      }
    }
    currentX = x;
    currentY += textLeading(); 
    

  }
  // fill(245);
  // text(lines.join(" "), x, y, 420, 420);
}

function mouseClicked() {
  textAlign(LEFT);

  lines = markov.generate(8);
  x = y = 40;
  rand1 = random(150);
  rand2 = random(150);
  rand3 = random(255);
  drawText();
}

function draw() {
  drawText();
}


