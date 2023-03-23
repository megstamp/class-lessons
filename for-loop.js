

//1. declare function  parameter is total
function loopNumber (char, total) {
    //const total = 100;

    for(let i=0; i<total; i++) {
        const result = i + "=" + char
        console.log(char);
    }
}

//2. Invoke the function (start the function)
loopNumber("🥬", 30); // this is the argument

