// Variables
var letters = ["a","p","w","q","b","z","g",
"t","y","l","i","e","r","f","d","k","n","j",
"m","u","s","x","c","h","o","v"];
var speed = -5;
var index = 0;
var objs = [];
var j = 0;
var score = 0;
var pop;
var name = window.prompt("Enter your name to play!")
var count = 0;
//color = 255;
// Runs first, before setup
function preload() {
  // Great place to load images
  pop = loadSound('./pop.ogg');
}

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch');
}

function draw() {
  // Forever loop
  background(255,182,193);
  textFont("Georgia");
  fill(0);
  textSize(25);
  if(objs.length<26)
  {
    text("Score:",5,20);
    text(score,100,20);
  }
  if(objs.length>=26)
  {
    textSize(35);
    text("Game Over",115,100);
    text(name, 150, 150);
    text("Final Score:",75,200);
    text(score,275,200);
  }
  if(objs.length > 9 && objs.length < 12)
  {
    textSize(15);
    text("You're doing great", 5,100);
    text(name, 5, 125);
  }
  if(objs.length > 19 && objs.length < 23)
  {
    textSize(15);
    text("Great Job", 5,100);
    text(name, 5, 125);
  }

  for(var j = 0; j<objs.length; j++)
  {
  	objs[j].draw();
  }
  if(frameCount%90 == 0)
	{
    if(objs.length<26)
    {
      objs[objs.length] = new Letter(letters[objs.length]);
      pop.play();
    }
  }

  	if(objs[objs.length-1].compare(key))
  	{
  		if(objs.length<26)
      {
        score++;
      }
  	}

}

function Letter(l)
{
  this.x = random(20,380);
  this.speed = random(1,3);
  this.y = -20;
  this.letter = l;
  this.color = 255;
}

Letter.prototype.draw = function()
{
	textFont("Georgia");
  		fill(this.color);
  		textSize(40);
  		text(this.letter,this.x,this.y);

  	this.y += this.speed;
    //this.speed += .6;//gravity
}

Letter.prototype.compare = function(key)
{
	if(key == this.letter)
	{
    if(keyIsPressed == true)
    {
      this.color = 0;
    }
    return true;
	}
	else
	{
		return false;
	}
}
/*function keyPressed()
{
  if(objs[objs.length-1].compare(key))
    this.color = 0;
}
function keyReleased()
{
  this.color = 255;
}*/