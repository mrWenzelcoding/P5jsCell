let x,y,r;
let xf,yf;
let explode =[];
let ex = [];
let ey = [];
let exspeed =[];
let eyspeed = [];
let test = true;
let z = 5

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height -100;
  r = 40;
  xf = random(10, width-10);
  yf = random(10, height-10);
  noStroke();
  let i = 0;
}

function draw() {
  background(0);
  push();
  fill("lightblue");
  rect(xf,yf, 10)
  pop();
  if(r<= 200){
  ellipse(x,y,r);
  x = x + (xf-x)/100
  y = y + (yf-y)/100
  }
  
  if(x > xf-5 && x == xf+5 || y > yf-5 && y < yf+5){
    xf = random(10, width-10);
    yf = random(10, height-10);
    r+=40;
    if(r<200){
      fill(random(100,200), random(50,200), random(50,250));
    }
  }
  
  //Setting speeds for the explosion and starting positons
  if(r==240 && test == true){
    let j = 0;
    while(j<100){
      exspeed.push(random(-5,5));
      eyspeed.push(random(-5,5));
      ex.push(x);
      ey.push(y);
      j++;
      test = false;
    }
  }
 
//Explosion taking place  
  if(r>200){
    if(r-z>0){
     z += 5;
    ellipse(x,y,r-z) 
    }
    console.log(z + " , " + r);
    let i = 0;
    while(i<100){
      ex[i] = ex[i] + exspeed[i];
      ey[i] = ey[i] + eyspeed[i];
      ellipse(ex[i],ey[i],10,10);
      i++;
    }
  }
}