let source = [
  "Apple",
  "Table",
  "Dog",
  "Cat",
  "Chair",
  "Book",
  "Car",
  "Tree",
  "House",
  "Ball",
  "Sun",
  "Moon",
  "Flower",
  "River",
  "Mountain",
  "Ocean",
  "Fish",
  "Bird",
  "Cloud",
  "Hat",
  "Shoe",
  "Lamp",
  "Key",
  "Door",
  "Window",
  "Star",
  "Cake",
  "Chair",
  "Guitar",
  "Phone",
];
let randomIndex;
let variableSize = 5;




function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 30);
  fill(200);
  // frameRate(1);

  textSize(24);
  textFont("monospace");
  textAlign(CENTER,CENTER);


  let sourceA = join(source, "\n");
  let piece = match(sourceA, /Cake/g);

  let rand = floor(random(2));
 
//   text("Dear" + " " + supervisor[rand] + "\n" +
//       "Due to" + " " +reason[rand] + " " + "I am sorry to have to cancel my appointment. I ask for your understanding." +
//       "\n" +
//       "Yours sincerely", 
//      width/2, height/2, width, height
//  );

textSize(variableSize);

text(
  source[randomIndex],

width/2, height/2);


variableSize = variableSize * 1.04 ;

if (variableSize > 170){
    variableSize = 5;
    randomIndex = floor(random(source.length));
    let newWord = source[randomIndex];
}

textAlign(LEFT,CENTER);
textSize(14);


  text(source[randomIndex],20,20);




}
