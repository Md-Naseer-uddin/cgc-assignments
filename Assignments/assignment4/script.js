// // Task 1: String Manipulation
// // 1. Declare a string variable sentence with the value:
// // "JavaScript is a powerful and popular programming language."
// var str="JavaScript is a powerful and popular programming language"
// // 2. Perform the following operations and log the results:
// // Convert the string to uppercase.
// console.log(str.toUpperCase())
// // Convert the string to lowercase.
// console.log(str.toLowerCase())
// // Find the index of the word "popular".
// console.log(str.indexOf("popular"))
// // Extract the word "powerful" using slice().
// var word=str.slice(str.indexOf("powerful"),str.indexOf("l")+1)
// console.log(word)
// // Replace "JavaScript" with "JS" using replace().
// console.log(str.replace("JavaScript","JS"))
// // Check if the string contains the word "language" using includes().
// console.log(str.includes('language'))




// // Task 2: Array Operations
// // 1. Create an array fruits containing the following values:
// // ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']
// var arr=['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']
// // 2. Perform the following operations:
// // Add "Pineapple" to the end of the array.
// arr.push("Pineapple")
// console.log(arr)
// // Remove the first element from the array.
// arr.shift()
// console.log(arr)
// // Insert "Strawberry" at the second position in the array.
// arr.splice(1,0,"Strawberry")
// console.log(arr)
// // Find the index of "Mango".
// console.log(arr.indexOf("Mango"))
// // Remove "Orange" from the array.
// arr.splice(3,1)
// console.log(arr)
// // Sort the array in alphabetical order.
// arr.sort()
// console.log(arr)
// // Reverse the order of the array
// var arr1=[]
// arr.forEach(
//     function (val){
//         arr1.unshift(val)
//     }
// )
// console.log(arr1)



// // Task 3: Creating and Using a Constructor Function
// // 1. Create a constructor function Person with the following properties:
// // name (string)
// // age (number)
// // gender (string)
// // greet (method that logs "Hello, my name is [name].")
// function Person(n,age,gen){
//     this.name= n
//     this.age=age
//     this.gender=gen
//     this.greet=function greet(){
//         console.log('Hello, my name is '+this.name)
//     }
// }
// // 2. Create three instances of the Person object with different values.
// p1=new Person('Naseer','18','male')
// p2=new Person('Faseeh','18','male')
// p3=new Person('Zain','18','male')
// // 3. Call the greet method for each object.
// p1.greet()
// p2.greet()
// p3.greet()




// // Task 4: Object Manipulation
// // 1. Create an object car with the following properties:
// // brand (string)
// // model (string)
// // year (number)
// // features (array of strings, e.g., ['Air Conditioning', 'Sunroof', 'Bluetooth'])
// var car = {
//     brand: "BMW",
//     model: "Z series",
//     year: 2019,
//     features: ['Sports car', 'Convertible', 'Innovative']
// }
// // console.log(car)
// // 2. Perform the following operations:
// // Add a new feature to the features array.
// car.features.push("Two-seater")
// // console.log(car)
// // Update the year property.
// car.year=1991
// // console.log(car)
// // Delete the model property.
// delete car.model
// // console.log(car)
// // Log the updated object
// console.log(car)




// // Task 5: Accessing Nested Objects in an Array
// // 1. Create an array students containing multiple objects, each representing a student with the
// // following properties:
// // name (string)
// // age (number)
// // grades (object with subjects as keys and scores as values, e.g., {math: 90, science: 85})
// function Student(n,age,mgrd,sgrd){
//         this.name= n
//         this.age=age
//         this.grades={
//             math:mgrd,
//             science:sgrd
//         }
//     }
//     var students=[
//         s1=new Student('Naseer',20,95,75),
//         s2=new Student('Raheem',21,65,85),
//         s3=new Student('Zain',22,96,65)
//     ]
// // 2. Perform the following operations:
// // Retrieve the science grade of the second student.
// console.log(students[1].grades.science)
// // Update the math grade of the first student.
// students[0].grades.math=75
// // Add a new subject and grade to one of the students.
// students[0].grades.js=74
// console.log(students)




// Bonus Task:
// Modify the Person constructor to include a method isAdult() that returns true if the age is 18 or
// above, otherwise false.
function Person(n,age,gen){
    this.name= n
    this.age=age
    this.gender=gen
    this.greet=function greet(){
        console.log('Hello, my name is '+this.name)
    }
    this.Adult=function (value){
        if (value>=18){
            return true
        }else{
            return false
        }
    }
}
var arr=[
p1=new Person('Naseer','19','male'),
p2=new Person('Faseeh','21','male'),
p3=new Person('Zain','15','male')
]
// console.log(p1.Adult(p1.age))
// Create an array of Person objects and filter out the adults.
var arr1=[]
arr.forEach(
    function (value){
        if (value.Adult(value.age)){
            arr1.push(value)
        }
    }
)
console.log(arr1)