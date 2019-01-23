/*

/// Logic Challenge - Password Generator

Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

*/

//A
function changeVocals(str) {
  var temp = "";
  var object = {
    a: "b",
    i: "j",
    u: "v",
    e: "f",
    o: "p",
    A: "B",
    I: "J",
    U: "V",
    E: "F",
    O: "P"
  };

  for (var i = 0; i <= str.length - 1; i++) {
    // console.log(str[i]) <=== untuk ngecek kondisi
    if (object[str[i]]) {
      // Misal i = 0 <=== S apakah S ini ada di dalam object kalau ada
      //console.log("ada") <== indikasi ngetest kalo ada
      //tambah ke temp array kosong
      temp += object[str[i]];
    } else temp += str[i]; // kalo ga ada tambah str[i] = S tersebut ke temp array kosong
  }
  var str = temp
  return str
}

//console.log(changeVocals("Sergei Dragunov"));

//B
function reverseWord(str) {
    var string = ''
    for(var i = str.length - 1; i >= 0; i--) {
        string += str[i]
    }
    return string
}
// console.log(reverseWord('Sfrgfj Drbgvnpv'))

//C
function setLowerUpperCase(str) {
    var string = ''
    for(var i = 0; i <= str.length - 1; i++) {
        if(str[i] === str[i].toUpperCase()) {
            string += str[i].toLowerCase()
        } else if(str[i] === str[i].toLowerCase()) {
            string += str[i].toUpperCase()
        }
    }
    return string
}
// console.log(setLowerUpperCase('vpnvgbrD jfgrfS'))

//D
function removeSpaces(str) {
    var string = ''
    for(var i = 0; i <= str.length - 1; i++) {
        if(str[i] !== ' ') {
            string += str[i]
        }
    }
    return string
}
// console.log(removeSpaces('VPNVGBRd JFGRFs'))

//E
function passwordGenerator(name) {
    var change = changeVocals(name)
    var reverse = reverseWord(change)
    var setCase = setLowerUpperCase(reverse)
    var remove = removeSpaces(setCase)
    return remove
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
