const form = document.querySelector("#events");
const type = document.querySelector("#type");
const notesContainer = document.querySelector("#notesContainer");
const output = document.querySelector("#output");
const notesLabel = document.querySelector("#notesLabel");

function updateNotesField() {
    const value = type.value;

    notesContainer.hidden = value === "";

    if (value === "student") {
        notesLabel.textContent = "Student I#";
    } else if (value === "guest") {
        notesLabel.textContent = "Access Code";
    }
}

type.addEventListener("change", updateNotesField);
updateNotesField();

function isPastDate(value) {
const today = new Date();
const chosen = new Date(value);
return chosen < today;
}

form.addEventListener("submit", function (event) {
event.preventDefault();
output.textContent = "";

const firstName = form.firstName.value.trim();
const lastName = form.lastName.value.trim();
const email = form.email.value.trim();
const eventType = form.type.value;
const eventDate = form.eventDate.value;
const note = form.notes.value.trim();
let errors = [];

if (firstName === "") {
    errors.push("Please enter your first name.");
}

if (lastName === "") {
    errors.push("Please enter your last name.");
}

if (email === "") {
    errors.push("Please enter your email.");
}

if (eventType === "") {
    errors.push("Please select a ticket type.");
}

if (eventDate === "") {
    errors.push("Please select an event date.");
}

if (eventType === "student") {
    if (note.length !== 9) {
        errors.push("Student I# must be 9 digits.");
    }
}

if (eventType === "guest") {
    if (note !== "EVENT131") {
        errors.push("Access code is incorrect.");
    }
}

if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
}

if (errors.length > 0) {
    output.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    return;
}

output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Ticket Type: ${eventType}</p>
    <p>Event Date: ${eventDate}</p>
`;

form.reset();
updateNotesField();


});
