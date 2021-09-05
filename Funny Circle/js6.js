class Circle{
    constructor(_x,_y,_radius) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
    }
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let color = getRandomColor();
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    let circle6 = new Circle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle6.x,circle6.y,circle6.radius,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function createMultipleCircle(){
    for (let i = 0; i < 30; i++) {
        createCircle()
    }
}
createMultipleCircle();