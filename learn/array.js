// Array
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// //multiply number
// const multiply = numbers.map(num => num * 2)
// const evenNumbers = numbers.filter(num => num%2 ==0)
// const oddNumbers = numbers.filter(num => num%2 !==0)

// const foundAll = numbers.filter(num => num>3) // Find all
// const found = numbers.find(num => num>3) // Finds only the first one
// const sum = numbers.reduce((num,total)=> num+total,0)



// console.log(found)
// console.log(foundAll)
// console.log(sum)



//Backend try

const users = [
    {name : "Joseph", age : 40, role : "user"},
    {name : "Sandra", age : 22, role : "admin"},
    {name : "Crown", age : 30, role : "admin"},
    {name : "Amanda", age : 17, role : "user"}
]



//get a user whose age is 18 and above
const adults = users.filter(user => user.age >= 18)
.map(user => user.name)

console.log(adults)


// const allAdmin = users
// .filter((user) => user.role ==="admin",0)
// .map(user => user.name)


// console.log(allAdmin)