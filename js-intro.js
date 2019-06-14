
// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
// function findB(string){
//     return string.charAt(0)
// }
// console.log(findB(mantra))
console.log(mantra.charAt(0))

// 2. Write the code that determines if there is a 'x' in mantra.
// function hasX(string){
//     return string.includes('x')
// }
// console.log(hasX(mantra))
console.log(mantra.includes('x'))
// 3. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes('v'))
// Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.indexOf('v'))

// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
// for(let i=0; i<mantra.length;i++){
//     console.log(mantra.charAt(i))
// }
// Stretch: Using a while loop.
// var i = 0
// while(i<mantra.length){
//     console.log(mantra.charAt(i))
//     i++
// }
// Super Stretch: Using forEach().
var mantraArray = mantra.split("")
var i = 0
//why cant i declare i inside the function? because each time it will reset it? is there a way around that?
mantraArray.forEach(function(){
    let arrayVal = mantraArray[i]
    i++
    console.log(arrayVal)
})

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
// function noVow(string){
//     return string.replace(/[aeiou]/gi, '')
// }
// console.log(noVow(message))
// Stretch: Update your function to throw an exception if the argument is not a string.
// function noVow(string){
//     if(typeof string !== "string"){
//         return `Please enter a string only`
//     } else {
//       return string.replace(/[aeiou]/gi, '') 
//     }
// }
// console.log(noVow(message))
// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

function noVow(string){
    if(typeof string !== "string"){
        throw `Enter only a string`
    } else {
       return string.replace(/[aeiou]/gi, '') 
    }
}
console.log(noVow(message))

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

//declare a function that will take in the argument of an array of objects and return the name of each cat
function onlyCat(array){
    //make an empty array to push the new values into
    var newArray = []
    //make a for loop that will go through and check to see if the animal is cat for every object and if so, push it into the new array
    for(let i = 0; i<array.length;i++){
        if(array[i].animal === 'cat'){
        newArray.push(array[i].name)
        }
    }
    //return new array
    return newArray
}
//call function
console.log(onlyCat(toonimals))