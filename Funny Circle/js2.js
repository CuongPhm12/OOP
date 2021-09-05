class Circle {
    constructor(_x, _y, _radius) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
    }
}
   function createCircle1(){
        let ctx1 = document.getElementById("myCanvas").getContext("2d");
        let radius = Math.floor(Math.random() * 80);
        let circle = new Circle(500, 500, radius);
        ctx1.beginPath();
        ctx1.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx1.fill();
    }
    createCircle1()
