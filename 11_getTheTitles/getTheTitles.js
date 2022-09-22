const getTheTitles = function(arr) {
    let list = []
    arr.forEach(currentItem => {
        list.push(currentItem.title)
    });
    return list
};

// Do not edit below this line
module.exports = getTheTitles;
