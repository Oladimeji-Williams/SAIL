function sayMyName(name){
  console.log(`My name is ${name}`)
}

sayMyName("ife")

let studentDetails = {
  name: "ife",
  age: 60,
  gender: "male",
  complexion: "dark",
  hobbies: ["playing football", "love watching arsenal", "love eating"],
  sayMyName(){
    console.log("My name is Ife")
  }
}

console.log(studentDetails.sayMyName())