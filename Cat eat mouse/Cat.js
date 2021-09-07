class Cat{
    constructor(_name,_weight,_maxSpeed) {
        this.name = _name;
        this.weight = _weight;
        this.maxSpeed = _maxSpeed;
    }
    toSay(string){
        console.log(string);
    }
    toCatch(rat){
        if(this.maxSpeed>=rat.speed){
            return true;
        }else{
            return false
        }
    }
    toEat(rat){
        if(rat.status){
            this.weight++
            rat.status = false;
        }
    }
}