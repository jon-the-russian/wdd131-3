// 1. Grab HTML elements
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');

// 2. Add an event listener, when image clicked open modal.
gallerySection.addEventListener('click', (event) => {
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