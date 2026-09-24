// 1. Functions
function nameOfFunction(name) {
    console.log("Hello functions! " + name);
    // String Template
    console.log(`Your name is ${name}`);
}

// Call the function, (invoke),(execute).
nameOfFunction("Jonathan McMaster");

// 2. Event Listeners
    // Grab element from DOM to listen to 
let selectBox = document.querySelector("#theme-select");
    // Register an event listener
    // Waits for specific thing to happen then runs a function.
selectBox.addEventListener("change", changeTheme);

function changeTheme(event) {
    console.log(event.target.value);
}


let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          

// 3. If Statements (Maybe)