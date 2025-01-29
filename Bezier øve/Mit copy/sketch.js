let p0x = 20
let p0y = 80
let p1x = 40
let p1y = 100
let p2x = 20
let p2y = 70
let p3x = 80
let p3y = 200
let t
let A
let B 
let C 
let D 
let E  
let F
let P
function setup()
{
    createCanvas(400, 400);
    background(255);
} 
function draw()
{

    stroke(100);

    point(A, 50);
    point(B, 50);
    point(C, 50);

}
function udregnBezier(){
    Ax = lerp (p0x,p1x,0.2)
    Ay = lerp(p0y,p1y,0.2)
    Bx = lerp (p1x,p2x,0.2)
    By = lerp(p1y,p2y,0.2)
    Cx = lerp (p2x,p3x,0.2)
    Cy = lerp(p2y,p3y,0.2)
    Dx = lerp (Ax,Bx,0.2)
    Dy = lerp(Ay,By,0.2)
    Ex = lerp (Bx,Cx,0.2)
    Ey = lerp(By,Cy,0.2)
 
    P =  lerp (D,E,t)
}
function drawBezier(){
    circle()
}