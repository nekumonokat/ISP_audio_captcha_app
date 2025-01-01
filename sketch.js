let mySound;

let playButton, refreshButton;
let inputBox, submitButton;
let checker = "this is a test for the audio captcha exercise"

let state = 0;
let currState = ["Not checked", "Approved", "Rejected"];

function preload() {
    mySound = loadSound("sounds/audio_captcha.wav");
}

function setup() {
    createCanvas(450, 250);

    // PLAYS AUDIO
    playButton = createButton("▶");
    playButton.position(20, 20);
    playButton.mousePressed(playAudio);
    playButton.addClass("iconButton");

    // REGENERATES AUDIO
    refreshButton = createButton("🗘");
    refreshButton.position(383, 20);
    refreshButton.mousePressed(generateAudio);
    refreshButton.addClass("iconButton");

    // LETS USERS TO INPUT ANSWER
    inputBox = createElement("textarea");
    inputBox.position(140, 75);
    inputBox.addClass("inputBox");

    // CHECKS ANSWER AGAINST ACTUAL
    submitButton = createButton("SUBMIT");
    submitButton.position(355, 75);
    submitButton.mousePressed(checkAnswer);
    submitButton.addClass("submitButton");
}

function playAudio() {
    // plays audio if it's not playing
    if (mySound.isPlaying() == false) { mySound.play(); }
}

function generateAudio() {
    // stopping audio if playing
    if (mySound.isPlaying() == true) { mySound.stop(); }
    // resetting inputBox and state
    inputBox.value("");
    state = 0;
}

function checkAnswer() {
    if (inputBox.value() == checker) { state = 1; }
    else { state = 2; }
}

function draw() {
    background(255);

    push();
    fill("#6CB4EE");
    rect(10, 10, 430, 160, 10); // base
    pop();
    rect(70, 30, 300, 30); // information

    text("Info: Play the audio file and submit your answer.", 80, 40, 300, 30);
    text("Type your answer:", 30, 90);
    text("Current status: " + currState[state], 30, 150);
}