const character = {
    name: "Snortlblat Lizard Man",
    class: "Swamp Puppy Organizer",
    level: 1,
    health: 100,
    image: "image/snortleblat.webp",

    attacked: function() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(this.name + " has died!");
        }

        updateCard();
    },

    levelUp: function() {
        this.level++;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = "Class: " + character.class;
    document.getElementById("characterLevel").textContent = "Level: " + character.level;
    document.getElementById("characterHealth").textContent = "Health: " + character.health;
    document.getElementById("characterImg").src = character.image;
}

updateCard();