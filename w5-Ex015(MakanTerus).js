
/*
// Logic Challenge - Makan Terus (Rekursif)

Problem
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. Function akan memproses jika waktu masih ada. Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1

*/

function makanTerusRekursif(waktu) {

    if(waktu <= 0 ) {
        return 0
    }

    if(waktu > 0) {
    return 1 + makanTerusRekursif(waktu - 15)
    }
    // 1 + mtr(66-15)
    // 1 + 1 + mtr(51-15)
    // 1 + 1 + 1 + mtr(36-15)
    // 1 + 1 + 1 + 1 + mtr(21-15)
    // 1 + 1 + 1 + 1 + 1 + mtr(6-15)
    // 1 + 1 + 1 + 1 + 1 + 0
}


  


// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0


// // TESTING PAKE CARA MANUAL
// function makanTerusRekursif(waktu) {

//   var counterMakan = 0
//   var remainingTime = waktu

//   if(waktu === 0) {
//     return 0
//   }

//   for(var i = 0; i <= remainingTime; i++) {
//     if(remainingTime >= 0) {
//       counterMakan++
//       remainingTime -= 15
//     }
//   }
//   return counterMakan
// }