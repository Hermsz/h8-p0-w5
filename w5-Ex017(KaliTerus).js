/*
//Logic Challenge - Kali Terus (Rekursif)

Problem
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

function kaliTerusRekursif(angka) {

  var numToStr = String(angka)

  if(numToStr.length === 1) {
    return Number(numToStr)
  }

  if(numToStr.length >= 2) {
      var temp = 1
      for(var i = 0; i <= numToStr.length - 1; i++) {
      temp = temp * Number(numToStr[i])
      }
  }
  return kaliTerusRekursif(temp)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6


// TESTING PAKE CARA MANUAL
// function kaliTerusRekursif(angka) {

//   var angkaToStr = String(angka)
//   var result = 0
//   if(angkaToStr.length === 1) {
//     return result += Number(angkaToStr)
//   }

//   var temp = 1
//   for(var i = 0; i <= angkaToStr.length - 1; i++) {
//     temp = temp * angkaToStr[i]
//   }

//   return kaliTerusRekursif(temp)
// }
