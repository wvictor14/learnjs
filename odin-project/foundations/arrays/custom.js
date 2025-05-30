// let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
function sort(array) {
    return array.sort((a, b) => b - a)
}

sort(arr);
alert( arr ); // 8, 5, 2, 1, -10

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort()
} 

let sorted2 = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

