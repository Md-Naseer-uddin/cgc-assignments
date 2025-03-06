// const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "d"];
// Given an array, count the number of times each character repeats and return an object with the count of each character.

const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "d"];
var func = (acc, val) => {
    if (acc[val]) {
        acc[val] += 1;
    } else {
        acc[val]=1;
    }
    return acc;
}

var res = arr.reduce(func, {});
console.log(res);