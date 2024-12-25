// //q1
// arr=("The sunset sets at twelve o' clock.");
// y=arr.toLowerCase() //to lower
// x=y.split(''); // split to loop
// result=[]
// //console.log('a'.charCodeAt(0)-96); //-96 if small -64 if capital
// //console.log(x.length)
// for(i=0;i<x.length;i++){
//     if(arr[i]==' '||arr[i]=='.')
//     {
//         continue;
//     }
//     result.push(x[i].charCodeAt(0)-96)//
// }
// console.log(result.join(' '));



// //q2
// arr=("is2 Thi1s T4est 3a");
// var w=arr.split(' ') // transform str to array of words
// for(var i=0; i<w.length-1;i++)
// {   
//     ws=w[i].split('').sort()[0] //extract digit of word
//     if (typeof w[i + 1] === "string")
//     {
//         wsB=w[i+1].split('').sort()[0]  //extract digit of word of next loop
//     }
//     if(ws>wsB) // if current > next (swap)
//     {
//     temp=w[i]
//     w[i]=w[i+1]
//     w[i+1]=temp
//     }
   
// }
// console.log(w)


// //q3
// function specialMultiply(a, b) {
//     if (arguments.length === 2) {
//         return a * b;
//     }
//    return function (c) {
//         return a * c;
//     };
// }
// console.log(specialMultiply(3, 4)); 
// console.log(specialMultiply(3)(5));
// console.log(specialMultiply(3)); 


function guessingGame(amount)
{
    amount--;
   answer=1
   guesses=0
 return function(guess)
 {
    while(true)
    {
        if(guesses>amount)
        { (console.log(`You Reached Out Of Tries , Answer Was  ${answer}`))
            break;
         }
        if(answer===guess)
        {
            return(console.log("You Got it"))}

            if(guesses==amount)
                { (console.log(`No more guesses the answer was ${answer}`))
                    break;
                 }
        else if(guess>answer)
        {
           (console.log("Your guess is too high!"))
           break
        }
        else if(guess<answer)
        { (console.log("Your guess is too low!")) 
            break;
        }
        
    }
        guesses++;
       // console.log(guesses)
 }
}

var game = guessingGame(4)
game(0)
game(0)
game(2)
game(5)
game(2)
game(2)
game(4)
game(2)
game(2)
game(4)
game(2)






