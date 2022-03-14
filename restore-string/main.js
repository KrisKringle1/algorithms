/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    //loop through indices
    //create a new string thats empty
    //concat the string at the index of indicies into the new string
    //return newstring

    let newString = "";

    for(let i = 0; i < indices.length; i++){
        newString += s[indices[i]]
    }

    return newString
};