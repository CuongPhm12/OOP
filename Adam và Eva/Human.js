class Human{
    constructor(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
        this.gender = true;
    }
    isMale(){
        return true;
    }
    setGender(){
        this.gender = !this.gender;
    }
    checkApple(apple){
        if (apple.getWeight()>0){
            return true;
        }else{
            return  false;
        }

    }
    eat(apple){
        this.weight++;
        apple.decrease();
    }
    say(string){
        console.log(string);
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
}
