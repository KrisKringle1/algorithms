/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(number) {
    const stringNumber = number + ""
    let sum;
    let product;
    for(let i = 0; i < stringNumber.length; i++){
        if(!sum){
           sum = parseInt(stringNumber[i])
        } else {
            sum += parseInt(stringNumber[i])
        }

        if(!product){
            product = parseInt(stringNumber[i])
        } else {
            product *= parseInt(stringNumber[i])
        }

    }
    return product - sum
};