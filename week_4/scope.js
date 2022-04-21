// var name = "Abbas"

var secretsfunction = function(){
    var pincode = [3,8,2,1]
    // console.log(name);
    //console.log("pincode inside the function",pincode);


}
secretsfunction()

//console.log("pincode outside the function",pincode);


var filterNameByFirstLatter = function (names, letter){ 
    var filterNames = []
    for(let name of names){
        if(name[0]=== letter){
            filterNames.push(name)        }
            // console.log(name);


    }
    console.log(name); 
    return filterNames
    
    
}


var students = ["Conner", "Abbas", "Arad","Hareeison","AJ","Mohammed","Devlin"]
// console.log(filterNameByFirstLatter(students,"A"));



let claculateEnergy = function(mass){
    const speedOfLite = 299792458
    speedOfLite ++
    return mass * speedOfLite ** 2
}
console.log(claculateEnergy(75));