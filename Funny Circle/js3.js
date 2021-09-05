class Circle {
    constructor(_x, _y, _radius) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
    }
}
    function getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    function getRandomColor(){
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + ","+ blue + "," + green + ")";
    }

  function createCircle2() {
        let ctx2 = document.getElementById("myCanvas").getContext("2d");
        let radius = Math.floor(Math.random() * 80);
        let color = getRandomColor();
        let circle2 = new Circle(500, 500, radius);
        ctx2.beginPath();
        ctx2.arc(circle2.x, circle2.y, circle2.radius, 0, 2 * Math.PI);
        ctx2.fillStyle = color;
        ctx2.fill();
    }
createCircle2();
