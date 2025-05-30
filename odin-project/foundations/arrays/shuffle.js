let arr = [1, 2, 3];

function shuffle(arr) {
    return arr.sort((a,b) => Math.random() - 0.5)
}

shuffle(arr);
shuffle(arr);
shuffle(arr);