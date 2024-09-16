console.log("Hello");

setTimeout(() => {
    console.log('timer is done');
} , 2000);

console.log('Hi !');
// this is asynchronous code because the timer is running in the background while the rest of the code is running.
// Example 2 (Comment Ex 1 and Uncomment the code below to see the output)
// Example ordering pizza
console.log("ordering your pizza...");

const pizzaPromise = () =>{
    return new promize((resove,reject) => {
        let order  =  true;

        if (order){
            setTimeout(() =>{
                resolve("After 5 seconds,Pizza not delivered!");
            }, 5000);
        }else{
            
            setTimeout(() =>{
            reject("After 5 seconds,Pizza not delivered!");
        }, 5000);
    }
});
};

//calling the function with a promise
//use .them() to handle the resolved promise
//use .catch() to handle the rejected promise

pizzaPromise()
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
console.log("waiting for you pizza.... ");
// Terminology
// Promise: An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Resolve: A callback function that is used when the promise is fulfilled.
// Reject: A callback function that is used when the promise is rejected.
// .then(): A method that is used to handle the resolved promise.
// .catch(): A method that is used to handle the rejected promise.
// setTimeout(): A method that is used to simulate a delay.
// Callback function: A function that is passed as an argument to another function, to be "called back" at a later time.