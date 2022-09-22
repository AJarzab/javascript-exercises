const findTheOldest = function(arr) {
    const oldestPeople = arr.sort(function(a,b){
        const lastPerson = Math.abs(a.yearOfBirth - a.yearOfDeath);
        const nextPerson = Math.abs(b.yearOfBirth - b.yearOfDeath);
        if (lastPerson > nextPerson) {
          return -1;
        } else {
          return 1;
        }
});
    return arr[0]
}
// Do not edit below this line
module.exports = findTheOldest;
