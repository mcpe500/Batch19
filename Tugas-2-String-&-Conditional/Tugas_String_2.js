var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var secondWord = sentence[2] + sentence[3]; 
var thirdWord = sentence[5]+sentence[6]+sentence[7]+sentence[8]+sentence[9];//sentence.substr([5],[5])
var fourthWord = sentence[11]+sentence[12];//sentence.substr([11],[2])
var fifthWord = sentence[14]+sentence[15];//sentence.substr([14],[2])
var sixthWord = sentence[17]+sentence[18]+sentence[19]+sentence[20]+sentence[21];//sentence.substr([17],[5])
var seventhWord = sentence[23]+sentence[24]+sentence[25]+sentence[26]+sentence[27]+sentence[28];//sentence.substr([23],[6]) 
var eighthWord = sentence[30]+sentence[31]+sentence[32]+sentence[33]+sentence[34]+sentence[35]+sentence[36]+sentence[37]+sentence[38];//sentence.substr(30)

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);