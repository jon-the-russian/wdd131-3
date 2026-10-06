let menuButton = document.querySelector('.menuButton');
// unnamed function, if you want to use a function only once, you can use an unnamed function.
menuButton.addEventListener("click", function (event) {
    let nav = document.querySelector('nav');
    
    nav.style.display = nav.style.display === '' ? 'flex' : '';
    
    menuButton.classList.toggle('change');
});


