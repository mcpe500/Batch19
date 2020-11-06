function balikKata(s){
    var newS = "";
    for (var i = s.length-1; i >= 0; i--)
        newS += s[i];
    return newS;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 