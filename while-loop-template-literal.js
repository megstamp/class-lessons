function loopWhile() {}
    let i = 0;
    const end = 5;

    while(i < end ) {
        const result = i + "" + "hello";
        console.log(result)
        i++ // if you put this above the const result it will start adding before terminaling, 
        // should happen after it iterates
}

function madLib (name, car, color){
    const sentence = `Hello your name is ${name}. You drive ${car} which is ${color}.`
    const sentence2 = "Hello your name is " + name + ". You drive " + car + " which is " + color + "."
    console.log(sentence);
} 

madLib("sloth", "subaru", "silver")
 
