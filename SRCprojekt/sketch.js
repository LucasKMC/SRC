let p0x = 100
let p0y = 500
let p1x
let p1y 
let p2x 
let p2y 
let p3x 
let p3y 
let t 
let Ax
let Ay
let Bx
let By
let Cx
let Cy
let Dx
let Dy
let Ex
let Ey
let Px
let Py
let img
let bezierpoints = []
let travellenght = 0
let traveling = false
let targetX = 400
let targetY = 200
let targetHit = false
let targetCanonballDistance

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
    clear()
    background(220)

    imageMode(CENTER)
    image(img,p0x,p0y,100,100)

    bezierPointsMovement()
    //drawPoints()

    if(traveling == true){
        canonball()
    }

    if(targetHit == true){
        targetCoordinats()
    }

    drawTarget()
}

function udregnBezier(){
    for(let i=0; i<1;i+=0.01){
    Ax = lerp (p0x,p1x,i)
    Ay = lerp(p0y,p1y,i)
    Bx = lerp (p1x,p2x,i)
    By = lerp(p1y,p2y,i)
    Cx = lerp (p2x,p3x,i)
    Cy = lerp(p2y,p3y,i)
    Dx = lerp (Ax,Bx,i)
    Dy = lerp(Ay,By,i)
    Ex = lerp (Bx,Cx,i)
    Ey = lerp(By,Cy,i)
 
    Px =  lerp (Dx,Ex,i)
    Py = lerp(Dy,Ey,i)
    bezierpoints.push([Px,Py])
    }

}
function bezierPointsMovement(){
    p3x = mouseX+p0x+970;
    p3y = mouseY+p0y-100;
    p1x = p3x*0.25 + 15
    p1y = mouseY*1.1-(p3x*0.2)
    p2x = p3x*0.75 + 15
    p2y = mouseY*1.1-(p3x*0.2) 
}
/*
function drawPoints(){
    circle(p0x,p0y,10)
    circle(p1x,p1y,10)
    circle(p2x,p2y,10)
    circle(p3x,p3y,10)
}
*/
function canonball(){
    if(bezierpoints[travellenght] && !targetHit){
        let xPos = bezierpoints[travellenght][0];
        let yPos = bezierpoints[travellenght][1];

        circle(xPos,yPos,50)

        targetCanonballDistance = sqrt((targetX-xPos)**2+(targetY-yPos)**2)

        if(targetCanonballDistance <= 50){//Tjekker om kanonkugle rammer
            targetHit = true
            traveling = false
        }
        travellenght++
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
    circle(targetX, targetY, 50)
    targetHit = false
}

function targetCoordinats(){
    targetX = random(500, width-100)
    targetY = random(100, height-100)
}

