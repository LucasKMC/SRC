let p0x = 30
let p0y = 500
let p1x = 100
let p1y = 100
let p2x = 400
let p2y = 100
let p3x = 500
let p3y = 500
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

function setup()
{
    createCanvas(600, 600);
    background(220);
} 
function draw()
{

    for( t=0;t<1;t+=0.001){
    udregnBezier(t)
    drawBezier()
    }
    drawPoints()
}
function udregnBezier(t){
    Ax = lerp (p0x,p1x,t)
    Ay = lerp(p0y,p1y,t)
    Bx = lerp (p1x,p2x,t)
    By = lerp(p1y,p2y,t)
    Cx = lerp (p2x,p3x,t)
    Cy = lerp(p2y,p3y,t)
    Dx = lerp (Ax,Bx,t)
    Dy = lerp(Ay,By,t)
    Ex = lerp (Bx,Cx,t)
    Ey = lerp(By,Cy,t)
 
    Px =  lerp (Dx,Ex,t)
    Py = lerp(Dy,Ey,t)
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