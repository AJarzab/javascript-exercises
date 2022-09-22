const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z]/g, "").toLowerCase()
    let reversed = string.replace(/[^a-zA-Z]/g, "").toLowerCase().split("").reverse().join("")
    return string === reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
