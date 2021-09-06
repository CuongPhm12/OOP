class Mobile {
    constructor(_name) {
        this.name = _name;
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }
    checkStatus(){
        if(this.status){
            return status;
            this.battery--;
        }
    }
    onOff(){
        this.status = !this.status;
    }
    composeMess(text){
        this.draft = text;
        this.battery--;
    }
    sendMes(phone){
        //this: đt hiện tại
        //phone: đt nhận
        //1.chuyển mes của this sang hộp thư đến của phone
        phone.inbox.push(this.draft);
        this.battery--;
        //2.chuyển mes của this vào hộp thư đã gửi của this
        this.outbox.push(this.draft);
        //3.xóa mes trong draft của this
        this.draft = "";
    }
    seenInbox(){
        return this.inbox;
        this.battery--;
    }
    seenOutbox(){
        return this.outbox;
        this.battery--;
    }
}
let phoneOfTrung = new Mobile("trung");
let phoneOfCuong = new Mobile("cuong");
function sendMestoTrung(){
    let message1 = document.getElementById("mess1").value;
    phoneOfCuong.composeMess(message1);
    phoneOfCuong.sendMes(phoneOfTrung);
    let inboxOfTrung = phoneOfTrung.inbox.join("-");
    document.getElementById("inbox2").innerText = inboxOfTrung;

}
