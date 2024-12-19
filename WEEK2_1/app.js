let studentData = {
    name: "Ife",
    age: 60,
    gender: "male"
}
//console.log(studentData.name, studentData.age)
let students = ["ife", "ope", "Hassan", 700, true, {name: "ola", age: 50}]
//console.log(students[5].age)

let myProducts = [
    {
        name: "Electric fan",
        price: 50,
        working: true,
        reviews: ["nice", "this is just too good"]
    },
    {
        name: "Smart TV",
        price: 500,
        working: false,
        reviews: ["very bad", "i don't like it"]
    },
    {
        name: "cooker",
        price: 35,
        working: true,
        reviews: ["nice", "this is just too good"]
    }
]

//console.log(myProducts[2].reviews[1])


let students2 = [
    {
      name: "ade",
      age: 50,
      gender: "male",
      complexion: "dark",
      score: 60
    },
    {
      name: "ola",
      age: 20,
      gender: "female",
      complexion: "light",
      score: 66
    },
    {
      name: "titi",
      age: 55,
      gender: "female",
      complexion: "very light",
      score: 88
    },
    {
      name: "fola",
      age: 25,
      gender: "male",
      complexion: "dark",
      score: 60
    },
    {
      name: "adeola",
      age: 50,
      gender: "female",
      complexion: "very dark",
      score: 99
    }
  ]
  let newStudent = {
    name: "tope",
    age: 27,
    gender: "female",
    complexion: "very light",
    score: 79
  }
  
  //console.log(students2[3]["name"], students2[3]["age"], students2[3]["gender"])
  //console.log(students2[3]["name", "age", "gender"])
// push adds a new item as the last element of the array
//students2.push(newStudent)
//console.log(students2)

// pop removes the last item in the array
//students2.pop()
//console.log(students2)

// shift removes the first item from the array
//students2.shift()
//console.log(students2)

// unshift adds a new item to the top of the array
students2.unshift(newStudent)
console.log(students2)