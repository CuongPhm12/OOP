class Hero {
    constructor(_image, _top, _left, _size){
    this.image = _image;
    this.top = _top;
    this.left = _left;
    this.size = _size;
}
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    moveRight(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
}
let hero = new Hero('image.jpg', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}
start();