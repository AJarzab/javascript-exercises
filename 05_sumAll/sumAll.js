const sumAll = function(start,end) {
    let sum = 0;
    if (start > end){
        let temp;
        temp = start;
        start = end;
        end = temp;
    }
    if (Math.sign(start) === 1 && Math.sign(end) === 1 &&
    typeof start === 'number' && typeof end === 'number'){
    for (let i=start;i<=end;i++){
        sum += i;}
    }
    else{
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
