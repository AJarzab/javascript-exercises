const fibonacci = function(num) {
    let a = 0
    let b = 1
    if (Math.sign(num) === -1){
        return "OOPS"
    }
    if (num === 0){
        return 0
    }
    else if (num === 1){
        return 1
    }
    
    for (let index = 1; index < num; index++) {
        b += a
        a = b-a
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
