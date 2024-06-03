let song;
let fft;
let r;
let xOffset = 0;
let yOffset;
let yOffset2;
let xWidth;
let c;
let fr = 20;

function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();
  frameRate(fr);

  fft = new p5.FFT(0, 512);

  selectSong('ludens.mp3');
}

function draw() {
  yOffset = height / 2;
  yOffset2 = height / 2;

  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    r = map(spectrum[i], 0, 255, 0, 1.5);
    c = map(spectrum[i], 0, 255, -500, 350);

    fill(c);
    rect(xOffset, yOffset, 600, r);
    rect(xOffset, yOffset2, 600, r);

    yOffset2 += r;
    yOffset -= r;
  }

  xOffset += xWidth;

  if (xOffset > width || !song.isPlaying()) {
    song.stop();
    xOffset = 0; // Setze xOffset zurück
  }
}

function selectSong(songName) {
  if (song) {
    song.stop();
  }

  song = loadSound(songName, startSong);
}

function startSong() {
  song.play();

  xOffset = 0;
  background(0);

  let totalFrames = song.duration() * fr;
  xWidth = width / totalFrames;
}
