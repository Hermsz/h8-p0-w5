
/*
Logic Challenge - Most Frequent Largest Numbers

Problem
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

*/

function sorting(arrNumber) {
    var temp = 0;
    for(var i = 0; i <= arrNumber.length - 1; i++) {
        for(var j = i; j <= arrNumber.length - 1; j++) {
            if(arrNumber[j] > arrNumber[i]) {
                temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    // console.log(arrNumber)
    return arrNumber
}

// var arrNumber = [2, 8, 4, 6, 8, 5, 8, 4]
// console.log(sorting(arrNumber)) // <---- cara ngetest function sorting diatas 

function getTotal(arrNumber) {

    if(arrNumber.length === 0) {
        return " ' ' "
    }

    var counter = 1

    for(var i = 1; i <= arrNumber.length - 1; i++) {
        if(arrNumber[0] === arrNumber[i]) {
            counter++ 
        }   
    }

return "angka paling besar adalah "+ arrNumber[0] + " dan jumlah kemunculan sebanyak " + counter + " kali"

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

//   var listSort = sorting(arrNumber);
console.log()
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log()
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log()
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log()
console.log(mostFrequentLargestNumbers([]));
//''

