// 1. Grab HTML elements
let pictures = document.querySelector('.pictures');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');

// 2. Add an event listener, when image clicked open modal.
pictures.addEventListener('click', (event) => {
    console.log(event.target.src);
    // Turn model on
    if(event.target.src !== undefined) {
        modal.showModal();
        // Change the image src to the image clicked.
        modalImg.src = event.target.src;
        // Replace the -sm with -full in the image src.
        modalImg.src = modalImg.src.replace('-sm', '-full');
    }
});
// 3. Close modal
let closeButton = modal.querySelector('.close-viewer');
closeButton.addEventListener('click', () => {
    modal.close();
});
// 4. Close modal when clicking outside of the image
modal.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.close();
    }
});

let menuButton = document.querySelector('.menu');
// unnamed function, if you want to use a function only once, you can use an unnamed function.
menuButton.addEventListener("click", function (event) {
    let nav = document.querySelector('nav');
    
    nav.style.display = nav.style.display === '' ? 'flex' : '';
    
    menuButton.classList.toggle('change');
});

