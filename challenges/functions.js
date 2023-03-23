// Write a function that takes the number of adults 

// returns the number of pizzas required to feed adults.

// 8 slices per pizza and 3 slices per adult.





//write function here...
function howManyPizzas(numAdults) {
    // multiply numAdults by 3 (slics per adult) to get slices
    const slicesNeeded = numAdults * 3
    //divide num slicesNeeded by 8 (slices per pie)
    const piesNeeded = slicesNeeded / 8
    //now round up to nearest pizza
    const numPizzas = Math.ceil(piesNeeded)
    return numPizzas
}


// call function here...
const ourNeed = howManyPizzas(26)
console.log ("we need" + ourNeed + "pizzas.")
