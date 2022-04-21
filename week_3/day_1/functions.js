function sayHellow(name){
    // console.log("Hello" + name)
    var greeting = "Hellow" + name
    return greeting
    
}
var newGreeting = sayHellow("Craig")

// console.log(newGreeting);

function timeOfDay(time, date){
    var timeAndDate = "the time is " + time + " on " + date
    return timeAndDate
}

var todaysDate = timeOfDay("10:48" , "11th of Aptil")
// console.log(todaysDate);                                                          
var todaysDate = timeOfDay("10:48" , "12th of Aptil")
// console.log(todaysDate); 


// Calculator

function add(FirstNUmber ,secondnumber){
    var result = FirstNUmber + secondnumber
    return result
    
}
var answer = add (1 , 4 )
// onsole.log(answer);c

function subtract(FirstNUmber , secondnumber){
    var result = FirstNUmber - secondnumber
    return answer
}

var answer = subtract (1 , 6)
// console.log(answer );

function divide(FirstNUmber ,secondnumber){
    var result =FirstNUmber / secondnumber
    return result
}
var answer = divide(2 , 4)
// console.log(answer);

function multiply( FirstNUmber, secondnumber){
    var result = FirstNUmber * secondnumber
    return result
}
var answer = multiply (2 , 3)
// console.log(answer);
var name = "Abbas"
var name2 = "Harrison"

function lengthOfASting(length){
    var lengthOfSting = length.length
    return lengthOfSting
}
var lengthOfname = lengthOfASting(name)
// console.log(lengthOfname);

function lengthOf2Strings(names, names2){
    var length =  names.length + " " + names2.length
    return length
}

var lengthOf2String = lengthOf2Strings(name, name2)
console.log(lengthOf2String);