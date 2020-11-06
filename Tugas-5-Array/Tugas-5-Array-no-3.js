function getSum(total, num) {
  return total + Math.round(num);
}
function sum(startNum=0,finishNum=0,step=1){
	if(startNum<finishNum){	
		var angka = []
		for (startNum;startNum<=finishNum;startNum=startNum+step){
			angka.push(startNum)
		}
	}else if(startNum>finishNum){
		var angka = []
		for (startNum;startNum>=finishNum;startNum=startNum-step){
			angka.push(startNum)
		}
	}
	else if (startNum==finishNum){
		var angka = [0]
	}else {
		var angka = [1] 
	}
	
return angka.reduce(getSum,0)
}


console.log(sum(1,10,1)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 