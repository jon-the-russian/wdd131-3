let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        document.body.style.backgroundColor = 'white';
        document.querySelectorAll('h1, p, li').forEach(el => el.style.color = "black");
    }   
    else {
        document.body.style.backgroundColor = 'black';
        document.querySelectorAll('h1, p, li').forEach(el => el.style.color = "white");
        document.querySelectorAll('border').forEach(el => el.style.color = "white");
    }
}