
/*

//Logic Challenge: Melee Ranged Grouping

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini

*/

function meleeRangedGrouping (str) {

  if(str.length === 0) {
    return []  
  }

  var temp = []
  var finalResult = []
  var rangeArr = []
  var meleeArr = []
  
  var string = ''
  for(var i = 0; i <= str.length - 1; i++) {
    if(str[i] !== '-' && str[i] !== ',') {
      string += str[i]
    } else {
      temp.push(string)
      string = ''
    }

    if(i === str.length - 1) {
      temp.push(string)
    }
  }
  // console.log(temp)

  for(var j = 0; j <= temp.length - 1; j++) {

      if(temp[j+1] === 'Ranged') {
        rangeArr.push(temp[j])
      }

      if(temp[j+1] === 'Melee') {
        meleeArr.push(temp[j])
      } 
  }
  // console.log(rangeArr)
  // console.log(meleeArr)
  finalResult.push(rangeArr, meleeArr)
  return finalResult

}


// TEST CASE
//Output [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log()
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log()
console.log(meleeRangedGrouping('')); // []