class Ape {
    // Code class di sini
    constructor(name){
        this.sheepname = "Auooo";
        this.legs = 4;
        this.cold_blooded = false;
    }
    yell(){
        return "Auooo"
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"

class Frog {
    // Code class di sini
    constructor(name){
        this.sheepname = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    jump(){
        return "hop hop"
    }
}

var kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop" 