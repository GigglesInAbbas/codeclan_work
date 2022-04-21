var sports = ["Football" , "tennis" , "rugby"]
// console.log(sports[0])
console.log("Array Length :" , sports.length)

// Adds to the array |
sports.push("carling")
sports.push("snooker")
sports.push("darts")
sports.push("All sports:" , sports)

// Remove the last elmant in the array
var RemovedSport = sports.pop()
// console.log("All sports:" ,sports)  
// console.log("Removed Sports :", RemovedSport)

//Removed the first element in the array
var RemovedfirtSports = sports.shift()
console.log("removed From Front :", RemovedfirtSports)
console.log (sports)

// Ad an element to the start of the arrey
sports.unshift("Basketball")
console.log(sports)
//Reamoving elements anywhere in the arrey
// 1. what  index were starting at
// 2. how many are we reomving
var  splicedsports = sports.splice(2,1)
console.log(sports)
console.log("splice sport " , splicedsports)

// Add elments anywhere in the 
sports.splice(2, 0, "golf")
console.log(sports);