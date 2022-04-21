var myPetShop = {
    admin: {
        total_cash: 1000,
        pets_sold: 0,
    },
    name: "Camelot of Pets",
    pets: [
        {
            name: "Sir Percy",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "King Bagdemagus",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "Sir Lancelot",
            pet_type: "dog",
            breed: "Pomsky",
            price: 1000,
        },
        {
            name: "Arthur",
            pet_type: "dog",
            breed: "Husky",
            price: 900,
        },
        {
            name: "Tristan",
            pet_type: "cat",
            breed: "Basset Hound",
            price: 800,
        },
        {
            name: "Merlin",
            pet_type: "cat",
            breed: "Egyptian Mau",
            price: 1500,
        }
    ]
}



var pet1 = {
    name: "Norman",
    pet_type: "dog",
    breed: "Husky",
    price: 4000,
}


// 1. Create a function to return a pet shops name

function myPetShopName(PetShop){
    return PetShop.name    
}
console.log(myPetShopName(myPetShop));
// 2. Create a function that will return a pet shops total cash
function myPetShopcash(number){
    var 
}



// 3. Create a function that can take in an amount of money and add it to a pet shops total cash


// 4. Create a function that can take in an amount of money and remove it from a pet shops total cash


// 5. Create a function that can add 1 to a pet shops amount of pets sold


// 6. Create a function that can return how many pets a pet shop has in its stock


// 7. Create a function that can return a pet from a pet shop, by its name


// 8. Create a function that can return the total cost of all pets in a pet shop


// 9. Create a function that can return all the pets for a given breed


// 10. Create a function that can add a pet to stock (Use pet1 above to add)


// 11. Create a function that can remove a pet from stock
//. Hint: Use pet1 from above (make sure its added), find its index and remove with splice



// 12. Sell a pet: Create a function that can remove a pet from stock, and also add the cost of the pet to the total cash of the shop, and also add 1 to the amount of pets sold. (Re-use your functions!)

