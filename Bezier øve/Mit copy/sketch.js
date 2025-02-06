let p0x = 30
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

function setup()
{

    createCanvas(600, 600);
    background(220);
} 
function draw()
{

    clear();
    background(220);
    p3x = mouseX+100;
    p3y = mouseY+800;
    p1x = p3x*0.25 + 15
    p1y = mouseY-(p3x*0.3)
    p2x = p3x*0.75 + 15
    p2y = mouseY-(p3x*0.3) 



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