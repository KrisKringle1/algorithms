/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const length = s.length - 1;
    let counter = 0;
    for(let i = length; i > -1; i--){
        
        if(s[i] === " " && counter){
            return counter;
        } else if(s[i] !== " "){
            counter++
        }
        
        

    }
    return counter
};