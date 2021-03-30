// Homework Assignment #6: Loops

for(let i = 1 ; i < 101 ; i += 1){
    setTimeout(() => {
        if (i === 1){
            console.log(i);
        } else if((i === 2 || i === 3 || i === 5 || i === 7) ||
         (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)){
            console.log("Prime");
        } else if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i)
        }
    },i * 200);
}

