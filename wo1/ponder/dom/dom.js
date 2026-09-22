// select an HTML element from the DOM
// Save to local variable
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "orange";
heading.style.fontSize = "3em";

//Challenge: Change Something else yourself

heading.style.padding = "500px";
heading.style.border = "solid 10px purple";
heading.style.textDecoration = "underline wavy #7A9703";

// many different ways to select from the DOM
document.getElementById("topics")

// you can select more than one element at a time
console.log(document.querySelectorAll(".lsit")[0].style);

let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("hr");
topicsClassList.toggle("hr");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                