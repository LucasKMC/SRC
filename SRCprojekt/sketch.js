let p0x = 100;
let p0y = 500;
let p1x;
let p1y;
let p2x;
let p2y;
let p3x;
let p3y; 
let t;
let Ax;
let Ay;
let Bx;
let By;
let Cx;
let Cy;
let Dx;
let Dy;
let Ex;
let Ey;
let Px;
let Py;
let img;
let bezierpoints = [];
let travellenght = 0;
let traveling = false;
let targetX = 600;
let targetY = 200;
let targetHit = false;
let targetCanonballDistance;
let xPos
let yPos
function setup()
{
    createCanvas(1000, 600);
    background(220);
} 

function preload(){
    img = loadImage('./Assets/canon.png');
}

function draw()
{
    clear();
    background(220);

    imageMode(CENTER);
    image(img,p0x,p0y,100,100);

    bezierPointsMovement();

    if(traveling == true){
        canonball()
    }

    if(targetHit == true){
        targetCoordinats()
    }

    drawTarget();
    boundaries();
 
}

function udregnBezier(){
    for(let i=0; i<1;i+=0.01){
    Ax = lerp (p0x,p1x,i);
    Ay = lerp(p0y,p1y,i);
    Bx = lerp (p1x,p2x,i);
    By = lerp(p1y,p2y,i);
    Cx = lerp (p2x,p3x,i);
    Cy = lerp(p2y,p3y,i);
    Dx = lerp (Ax,Bx,i);
    Dy = lerp(Ay,By,i);
    Ex = lerp (Bx,Cx,i);
    Ey = lerp(By,Cy,i);
 
    Px =  lerp (Dx,Ex,i);
    Py = lerp(Dy,Ey,i);
    bezierpoints.push([Px,Py]);
    }

}
function bezierPointsMovement(){
    p3x = mouseX+p0x+970;
    p3y = mouseY+p0y-100;
    p1x = p3x*0.25 + 15,
    p1y = mouseY*1.1-(p3x*0.2);
    p2x = p3x*0.75 + 15;
    p2y = mouseY*1.1-(p3x*0.2);
}

function canonball(){
    if(bezierpoints[travellenght] && !targetHit){//Hvis bezierpoints har en værdi og targetHit ikke er sandt så gør nedstående
        xPos = bezierpoints[travellenght][0];//xPos er bezierpoints første værdi 
        yPos = bezierpoints[travellenght][1];//yPos er bezierpoints anden værdi

        circle(xPos,yPos,50); //Der bliver tegnet en cirkel(kanonkuglen) med koordinaterne xPos og yPos med en radius på 50

        targetCanonballDistance = sqrt((targetX-xPos)**2+(targetY-yPos)**2);//Udregner afstanden mellem målet og kanonkuglen

        if(targetCanonballDistance <= 50){// Hvis afstanden mellem målet og kanonkuglen er mindre ind eller det samme som 50 så gør nedstående
            targetHit = true// targetHit bliver sat til true
            traveling = false//traveling bliver sat false
        }
    
        travellenght++;//travellenght bliver adderet med sig selv og 1
    }

}

function mousePressed(){
    if(mouseButton === LEFT){
        bezierpoints = []
        udregnBezier()
        travellenght = 0
        traveling = true
    }
}

function drawTarget(){
    circle(targetX, targetY, 50);
    targetHit = false;
}

function targetCoordinats(){
    targetX = random(500, width);
    targetY = random(100, height);
}

function boundaries(){
        if (xPos > width-30 || yPos > height) {
            traveling = false;
        }
}