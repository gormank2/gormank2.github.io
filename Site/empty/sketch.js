//Kylie Gorman
//Title at top of the page
//Analog clock at center and digital at the 
//bottom of the screen
//Hour and Minute hands
//Click screen to see the clock change color
//when each second passes

// Variables
var r = 0;
var g = 0;
var b = 255;
var start = (3*PI)/2;

// Runs first, before setup
function preload() {
  // Great place to load images
}

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  frameRate(1);
}

function draw() {
  // Forever loop
  background(173,216,230);
  stroke(0);
  strokeWeight(4);

if(mouseIsPressed)
{
  if(second()%2 == 0)
  {
    fill(r,g,b);
  }
  if(second()%2 == 1)
  {
    noFill();
  }
}
  ellipse(250,250,200,200);

///////////////////////////////////////////////
//hour hand
  //var angle = (frameCount/100) * TWO_PI;
  if(hour() == 1 || hour() == 13)
  {
    line(width/2,height/2,
      cos((5*PI)/3) * 75 + width/2,
      sin((5*PI)/3) * 75 + height/2
      );
  }

  if(hour() == 2 || hour() == 14)
  {
    line(width/2,height/2,
      cos((11*PI)/6) * 75 + width/2,
      sin((11*PI)/6) * 75 + height/2
      );
  }

  if(hour() == 3 || hour() == 15)
  {
    line(width/2,height/2,
      cos(0) * 75 + width/2,
      sin(0) * 75 + height/2
      );
  }

  if(hour() == 4 || hour() == 16)
  {
    line(width/2,height/2,
      cos((PI)/6) * 75 + width/2,
      sin((PI)/6) * 75 + height/2
      );
  }

  if(hour() == 5 || hour() == 17)
  {
    line(width/2,height/2,
      cos((PI)/3) * 75 + width/2,
      sin((PI)/3) * 75 + height/2
      );
  }

  if(hour() == 6 || hour() == 18)
  {
    line(width/2,height/2,
      cos((PI)/2) * 75 + width/2,
      sin((PI)/2) * 75 + height/2
      );
  }

  if(hour() == 7 || hour() == 19)
  {
    line(width/2,height/2,
      cos((2*PI)/3) * 75 + width/2,
      sin((2*PI)/3) * 75 + height/2
      );
  }

  if(hour() == 8 || hour() == 20)
  {
    line(width/2,height/2,
      cos((5*PI)/6) * 75 + width/2,
      sin((5*PI)/6) * 75 + height/2
      );
  }

  if(hour() == 9 || hour() == 21)
  {
    line(width/2,height/2,
      cos(PI) * 75 + width/2,
      sin(PI) * 75 + height/2
      );
  }

  if(hour() == 10 || hour() == 22)
  {
    line(width/2,height/2,
      cos((7*PI)/6) * 75 + width/2,
      sin((7*PI)/6) * 75 + height/2
      );
  }

  if(hour() == 11 || hour() == 23)
  {
    line(width/2,height/2,
      cos((4*PI)/3) * 75 + width/2,
      sin((4*PI)/3) * 75 + height/2
      );
  }

  if(hour() == 0 || hour() == 12 || hour() == 24)
  {
    line(width/2,height/2,
      cos((3*PI)/2) * 75 + width/2,
      sin((3*PI)/2) * 75 + height/2
      );
  }
  ///////////////////////////////////////////////////////////
  //minute hand
    if(minute() > -1 && minute() < 5)
  {
    line(width/2,height/2,
      cos((3*PI)/2) * 100 + width/2,
      sin((3*PI)/2) * 100 + height/2
      );
  }

 if(minute() > 4 && minute() < 10)
  {
    line(width/2,height/2,
      cos((5*PI)/3) * 100 + width/2,
      sin((5*PI)/3) * 100 + height/2
      );
  }

  if(minute() > 9 && minute() < 15)
  {
    line(width/2,height/2,
      cos((11*PI)/6) * 100 + width/2,
      sin((11*PI)/6) * 100 + height/2
      );
  }

  if(minute() > 14 && minute() < 20)
  {
    line(width/2,height/2,
      cos(0) * 100 + width/2,
      sin(0) * 100 + height/2
      );
  }

  if(minute() > 19 && minute() < 25)
  {
    line(width/2,height/2,
      cos((PI)/6) * 100 + width/2,
      sin((PI)/6) * 100 + height/2
      );
  }

  if(minute() > 24 && minute() < 30)
  {
    line(width/2,height/2,
      cos((PI)/3) * 100 + width/2,
      sin((PI)/3) * 100 + height/2
      );
  }

  if(minute() > 29 && minute() < 35)
  {
    line(width/2,height/2,
      cos((PI)/2) * 100 + width/2,
      sin((PI)/2) * 100 + height/2
      );
  }

  if(minute() > 34 && minute() < 40)
  {
    line(width/2,height/2,
      cos((2*PI)/3) * 100 + width/2,
      sin((2*PI)/3) * 100 + height/2
      );
  }

  if(minute() > 39 && minute() < 45)
  {
    line(width/2,height/2,
      cos((5*PI)/6) * 100 + width/2,
      sin((5*PI)/6) * 100 + height/2
      );
  }

  if(minute() > 44 && minute() < 50)
  {
    line(width/2,height/2,
      cos((PI)) * 100 + width/2,
      sin((PI)) * 100 + height/2
      );
  }

  if(minute() > 49 && minute() < 55)
  {
    line(width/2,height/2,
      cos((7*PI)/6) * 100 + width/2,
      sin((7*PI)/6) * 100 + height/2
      );
  }

  if(minute() > 54 && minute() < 60)
  {
    line(width/2,height/2,
      cos((4*PI)/3) * 100 + width/2,
      sin((4*PI)/3) * 100 + height/2
      );
  }
  ///////////////////////////////////////////////
  //Seconds
  strokeWeight(1);
  line(width/2,height/2,
    cos(((PI/30)*second())+start) * 100 + width/2,
    sin(((PI/30)*second())+start) * 100 + height/2
    );

  strokeWeight(2);
  textSize(32);
  fill(255);
  textFont("Georgia");
  text("The Current Time", 125,100);
  text(hour(), 150, 450);
  text(": ", 195, 450);
  if(minute() > 9)
  {
    text(minute(), 215, 450);
  }
  if(minute() < 10)
  {
    text("0" + minute(), 215, 450);
  }
  text(": ", 255, 450);
  text(second(), 275, 450);

}









