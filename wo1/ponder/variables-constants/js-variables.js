let age ="21";
let name = "Jon";
console.log(age);
age = "22";
console.log(age);

const eyeColor = "Blue";
const policyDisclaimers = "Exclusions apply to vehicles registered in Michigan";

let favoriteColor = "";

//Scope is where variables can be referenced

if(age == 22) {
    //Now in different scope
    //Inside this scope, we can reference variables declared outside this scope
    console.log(name);

    //Declare a variable in an inner scope
    let favoriteColor = "BLUE";
}

// pull something from html
document.querySelector("h1").style.color = favoriteColor;

