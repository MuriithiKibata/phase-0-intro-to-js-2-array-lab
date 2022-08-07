// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat () {
    cats.push("Ralph")
}
function destructivelyPrependCat () {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    console.log(cats.pop())
}
function destructivelyRemoveFirstCat() {
    console.log (cats.shift())
}
let feline = cats.concat (["Broom"])

function appendCat() {
    return feline
} 
const copyOfCats = [...cats]
copyOfCats.unshift("Arnold")
function prependCat () {
    
    return copyOfCats
}
const  newCopy = [...cats]
function removeLastCat () {
    console.log(newCopy.pop())
    return newCopy
}
const lastCopy = [...cats]
function removeFirstCat () {
    console.log (lastCopy.shift())
    return lastCopy
}


