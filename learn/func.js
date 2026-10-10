
// Functions

//Traditional function
// function greet(name){
//     return 'Hello' + ' ' + name + '!';
// }

// -------------------------------------------------


// Arrow function
// const greet = (name) => "Hello" + " " + name + "!"

//multiply
// const multiply = (a,b) => a*b




// // console.log(greet("Crown Aluka"))
// console.log(multiply(5,10))




//Backend Try
const checkEmail = (email) => {
    return email.includes('@') && email.includes('.')
};

    const userEmail = "crown@gmail.com"
    if(!checkEmail(userEmail)){
        console.log("Please enter a valid email!")
    }else{
        console.log("Login Successful!")

    }
