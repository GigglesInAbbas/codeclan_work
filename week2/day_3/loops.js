

// console.log(numbers);

// for(var number of numbers){
//     var doublednumber = number * 2 
//     console.log(doublednumber)
//}

var sports = [ "football", "rugby" , "bowling" ]

// console.log(sports)

// for (var sport of sports){
//     var capitalsports = sport.toUpperCase()
//     console.log(capitalsports)
// }

// var numbers = [1,2,3,4,5]

// var total = 0

// for ( var number of numbers){
//     total = total + number 

// }

// console.log(total)

var chickens = [
    {name: "Margaret", age: 2, eggs: 0},
      {name: "Hetty", age: 1, eggs: 2},
      {name: "Henrietta", age: 3, eggs: 1},
      {name: "Audrey", age: 2, eggs: 0},
      {name: "Mabel", age: 5, eggs: 1}
    ]
var totalEggs = 0
// for(var chicken of chickens){
//     totalEggs = totalEggs + chicken.eggs
//     chicken.eggs = 0
    
// }
// console.log(chickens)

// for(var chicken of chickens){
//     if(chicken.eggs > 0 ){
//         console.log(chicken.name + " has "+ chicken.eggs + "eggs.")
//     }
// }


var movie ={
    title: "Garfield",
    year : 2004,
    rarings: [
        {critics: 
            {imdb: 5, rt: 15}
        }
    ]
}
console.log(movie.rarings[0].critics.rt)