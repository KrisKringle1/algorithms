/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    //loop through sentences and count each space
    //make sure character before the space is a character and not another space
    //make sure punctuation is accounted for by not counting spaces after commas

    let length = 0
    let count = 0
    for(let i = 0; i < sentences.length; i++){
        
        

        let innerSent = sentences[i]

        

        for(let j = 0; j < innerSent.length; j++){
        
            if(innerSent[j] === " "){
                
                count++;
            }
        }

        count+=1 



        if(count > length){
            length = count
        }
    
        count = 0;

    }

    return length

    
};