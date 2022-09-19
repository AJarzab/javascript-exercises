const removeFromArray = function(arr,...remove) {
    remove.sort();
    for (let i=0;i<arr.length;i++){
        for (let ii=0;ii<remove.length;ii++){
            if (arr[i]===remove[ii]){
                arr.splice(i,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
