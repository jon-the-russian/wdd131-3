// 1. Click on button
document.querySelector('#rollButton').addEventListener("click", e => {
    // 2. Animate the Die
    setDieImages("assets/die_rolling.gif");
    // 3. land on a new random number
    setTimeout(() => {
        // this function will run after the timeout duration below

        document.querySelectorAll('#gameboard img').forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });

        // Math.random()
        //Math.floor() rounds to nearest whole int
        // 0 - 1, 0.23141345
    }, 1000);

});

function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath;
    });
}