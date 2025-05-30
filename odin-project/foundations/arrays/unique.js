function unique(arr) {

    let arrUnique = [];
    for (item of arr) {
        if (!arrUnique.includes(item)) {
            arrUnique.push(item);
        }
    }
    return(arrUnique)

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); 