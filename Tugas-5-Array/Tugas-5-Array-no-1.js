
function range(startNum,finishNum){
  if (startNum < finishNum){
   var angka = []
   for (startNum;startNum<=finishNum;startNum++){
     angka.push(startNum)
     }
  }else if (startNum>finishNum){
    var angka = []
    for (startNum;startNum>=finishNum;startNum--){
     angka.push(startNum)
     }
   }else{
    var angka = -1
   }
return angka
}

 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 