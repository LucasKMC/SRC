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
    p3x = mouseX+p0x+970;
    p3y = mouseY+p0y-100;
    p1x = p3x*0.25 + 15
    p1y = mouseY*1.1-(p3x*0.2)
    p2x = p3x*0.75 + 15
    p2y = mouseY*1.1-(p3x*0.2) 
    imageMode(CENTER);
    image(img,p0x,p0y,100,100);
    if(travellenght > bezierpoints.length){
        
        traveling = false
    }
    if(traveling == true){
        canonball()
    }
   


    //for( t=0;t<1;t+=0.11){
    //udregnBezier(t)
    //drawBezier()
    //}

    drawPoints()
    
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
function drawBezier(){
    circle(Px,Py,2)
}
function drawPoints(){
    circle(p0x,p0y,10)
    circle(p1x,p1y,10)
    circle(p2x,p2y,10)
    circle(p3x,p3y,10)

}

function canonball(){
    if(bezierpoints[travellenght]){
        circle(bezierpoints[travellenght][0],bezierpoints[travellenght][1],50)
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