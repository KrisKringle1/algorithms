/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(string, indices) {
    let returnString = ""
    for(let i = 0; i < indices.length; i++){
        console.log(string[indices[i]])
       returnString += string[indices[i]]
        
    }
    return returnString
};