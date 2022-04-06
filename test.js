// console.log("Test")
// var foo;

// if (true) {
//     console.log(foo)
// }

// foo = "ABC"
// console.log(foo)

// if (true) {
//     var name = "Chris"
// }

// console.log(name)

// if (true) {
//     let name2 = "Paul"
// }

// console.log(name2)

function test(rows, cols) {
    console.log(rows + " " + cols)
    for (let i = 1; i < rows + 1; i++) {
        console.log(i + '\n')
    }

    for (let j = rows + 1; j > -1; j--) {
        console.log(j + '\n')
    }
}

test(4, 5)