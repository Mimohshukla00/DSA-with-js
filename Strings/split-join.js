const nameis="mimohshukla"
function whoisit(is) {
    const result1=is.split("")
    console.log(result1);
    const result2=result1.reverse()
    console.log(result1);
    const result3=result2.join()

    console.log(result3);

    
    
}
// function whoisit2(is) {
//     const result2=nameis.reverse();
//     return result2;
    
// }
whoisit(nameis)
// console.log(whoisit2(nameis))


function reversestring(string) {
    for (let index = string.length-1; index >=0 ; index--) {
        // console.log(string[index]);
        let newstring=""
        newstring+=string[index]
        console.log(newstring); 


        
    }
    
}
reversestring("computer")