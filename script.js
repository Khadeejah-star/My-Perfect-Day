const button = document.querySelector("#cheer");
const count = document.querySelector("#count");

let cheers = 0;

button.addEventListener("click", () => {
  cheers = cheers + 1;
  count.textContent = cheers + " cheers";
});

function randomOption() {
    let options = [
        "chicken.jfif",
        "cinnamonroll.jfif",
        "Food.jfif",
        "foodie.jfif"
    ];

    let random = Math.floor(Math.random() * options.length);

    document.getElementById("result").innerText = "";
    document.getElementById("breakfastImage").src = options[random];
}

function randomActivity() {
    let activities = [
        "Once Upon A Broken Heart",
        "",
        "Read a book 📖",
        "Play games 🎮"
    ];

    let random = Math.floor(Math.random() * activities.length);

    document.getElementById("bookresult").innerText = activities[random];
}

function randomThing() {
    let activities = [
        "Sleep!",
        "Go for a walk..",
        "Crochet a keychain",
        "Watch a drama",
        "Knit a scarf!"
    ];

    let random = Math.floor(Math.random() * activities.length);

    document.getElementById("activityresult").innerText = activities[random];
}