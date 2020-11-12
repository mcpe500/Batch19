class Animal {
    // Code class di sini
    constructor(name){
        this.sheepname = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get name() {
        return this.sheepname;
    }
    set name(x) {
        this.sheepname = x;
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
