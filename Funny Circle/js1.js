class Circle{
    constructor(_x,_y,_radius) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
    }
}
    function createCircle(){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let circle = new Circle(500,500,80);
        ctx.beginPath();
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        ctx.fill();
    }
    createCircle()





