
/*
Logic Challenge - Total Digit (Rekursif)

Problem
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

*/

function totalDigitRekursif(angka) {
  
  var numToStr = String(angka)
  //console.log(numToStr) <--- testing apakah sudah jadi string 

  if(numToStr.length === 1) {
    return Number(numToStr) // <--- if index nya sdh jd 1 langsung aja di push (tapi inget di convert dulu ke number lagi !!!)
  }

  var lastIndex = numToStr.length - 1

  return Number(numToStr[lastIndex]) + totalDigitRekursif(numToStr.slice(0, lastIndex)) 

  // 2 + 51 <--- 1st return yg kedua
  // return 2 + 1 + 5 <--- 2nd return yg kedua 

}


// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5


// ----- TESTING CARA MANUAL -----
// function totalDigitRekursif(angka) {

//   var total = 0
//   var numToStr = String(angka)
//   var numToStrArr = []
//   //console.log(numToStr) <-- to test angka that is now string
//   for(var i = 0; i <= numToStr.length - 1; i++) {
//     numToStrArr.push(Number(numToStr[i]))
//   }
//   //console.log(numToStrArr) <-- to test pushed array Number value
//   for(var j  = 0; j <= numToStrArr.length - 1; j++) {
//     total += numToStrArr[j]
//   }
//   return total
// }
// ----- END -----