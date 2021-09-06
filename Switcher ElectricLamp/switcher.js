class switcherButton{
     constructor() {
      this.status = true;
      this.lamp = electricLamp;
}
connectToLamp(electricLamp){
         return true;
}
      switchOff(electricLamp){
         electricLamp.turnOff();
     }
     switchOn(electricLamp){
         electricLamp.turnOn();
     }
}