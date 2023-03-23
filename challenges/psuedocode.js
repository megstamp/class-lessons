//write a funcition that takes a number of adults, a number or children, and
// the number of beds in a vacation home and returns true if there are enough beds
// for everyone and false if not. Assume that all adults will sleep 2 to a bed.


function enoughBeds(numAdults, numKids, numBeds) {
    // 1. divide number of adults by 2
    const adultBeds = numAdults/2
    // 2. add that to the number of kids.
    totalBedsNeeded = adultBeds+ numKids
    // 3. result <= number of beds.
    return (totalBedsNeeded <= numBeds)

// or you can write these 5 lines below, they are the same, it's a shortcut.
    // if(totalBedsNeeded <= numBeds) {
    //     return true
    // }  else {
    //     return false
    // }
}

const canWeFit = enoughBeds(8, 4, 5)
console.log("Can we fit?", canWeFit)