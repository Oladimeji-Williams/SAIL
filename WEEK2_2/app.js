let firstNumber = 22
let secondNumber = 33
let difference = firstNumber - secondNumber
firstNumber = "ola"
secondNumber = "williams"
let opp = firstNumber + secondNumber
firstNumber = 22
secondNumber = "22"
let comp = firstNumber === secondNumber
console.log(comp)

firstNumber = "ife"
secondNumber = "Ebenezer"
let numbers = [1, 2, 3, 4, 5, 9, 6, 7, 8, 9]
console.log(numbers.length)
console.log(numbers[4])
console.log(numbers.indexOf(5))
console.log(numbers.at(4))
console.log(numbers.lastIndexOf(9))
console.log(numbers.indexOf(9))


let names = ["ife", "ebenezer", "adeleke", "ahmed", "onyekachi", "ayomide"]
console.log(names.indexOf("adeleke"))
console.log(names.includes("adeleke"))
console.log(names.includes("adelekes"))
console.log(names.at(4).toUpperCase())

let num = [1, 2, 3, 4, 5, 6,7, 6, 9]
console.log(num)
num.splice(3, 1, 0, 0,0)
console.log(num)
num.splice(3, 2, 0, 0,0)
console.log(num)
num.splice(3, 0, 0, 0,0)
console.log(num)

// functions help us to write reusable codes


sayMyName()
//sayMySecondName()
// only creating functions like this allows function call before creation, which is called Hoisting. all other methods do not
function sayMyName(){
    console.log("my name is Oladimeji Williams")
}
sayMyName()

const sayMySecondName = () =>{
    console.log("My second name is Sewedo")
}

const sayMySurname = function() {
    console.log("My surname is Williams")
}

sayMySecondName()
sayMySurname()

// only creating variables with var allows variable call before declaration, which is called Hoisting. all other methods do not
console.log(mylove);
var mylove = "ola"

//console.log(mysecondlove);
let mysecondlove

const aboutMe = (name, age, hobby) =>{
    console.log(`my name is ${name} and i am ${age} year old. I love ${hobby}.`)
}

aboutMe("oladimeji", 2, "coding")