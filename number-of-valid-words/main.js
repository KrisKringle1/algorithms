/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    //split the string on " "
    //for each word in there check to see if it contains anything that isnt a letter

    const words = sentence.split(' ');


    const wordArray = words.filter(word => word !== "")

    let count = 0

    const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~1234567890]/;
    const punctuation = /[!.,?]/;

    for(let i = 0; i < wordArray.length; i++){

        if(wordArray[i].includes(',')){
            const index = wordArray[i].indexOf(',')
            if( index !== wordArray[i].length -1){
                continue
            }
        }

        if(wordArray[i].includes('.')){
            const index = wordArray[i].indexOf('.')
            if( index !== wordArray[i].length-1){
                continue
            }
        }

        if(wordArray[i].includes('-')){

            if(wordArray[i] === '-'){
        
                continue;
            }

            let dash = wordArray[i].split('-')


            if(dash.length === 2){
            
                //hi there

                if(punctuation.test(dash[0]) || punctuation.test(dash[1])){
                    if(dash[1].includes('.')){
                        const index =  dash[1].indexOf('.')

                        if(index !== dash[1].length -1 ){
                            continue;
                        }
                    }
                    if(dash[1].includes(',')){
                        const index =  dash[1].indexOf(',')
                

                        if(index !== dash[1].length -1 ){
                            continue;
                        }
                    }
                    
                }
                    if(!specialChars.test(wordArray[i])){
                    
                        count++;
                    
                    }
                
            }
            
        }
        else if(wordArray[i].includes('!')){
            if(wordArray[i] === "!"){
                count++;
            }

            const index = wordArray[i].indexOf("!")
                if(!wordArray[index + 1]){
                    if(!specialChars.test(wordArray[i])){
                        count++;
                        
                    }
                    
                }
            
        }
        
        else if(!specialChars.test(wordArray[i])){
        
            count++;
    
        }
    }

    return count
};