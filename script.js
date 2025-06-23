// DOM Elements
const openMeButton = document.getElementById("open-me");
const initialPage = document.getElementById("initial-page");
const scrollPage = document.getElementById("scroll-page");
const confettiContainer = document.getElementById("confetti-container");
const balloonContainer = document.getElementById("balloon-container");
const scrollMessage = document.getElementById("scroll-message");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

// Messages and images to reveal
const messages = [
    "Happy 21st! sweetheart. Hope you have a great day todayyy",
    "I love you so much umwahh",
    "I hope you know how special you are to mee"
];

const images = [image1, image2, image3, image4];

// Event Listener for "Open Me" button
openMeButton.addEventListener("click", () => {
    initialPage.style.display = "none";
    scrollPage.style.display = "block";

    // Start animations
    startConfetti();
    startBalloons();

    // Reveal messages and images
    revealContent();
});

// Function to reveal content
function revealContent() {
    let delay = 0;

    messages.forEach((message, index) => {
        setTimeout(() => {
            scrollMessage.textContent = message;

            if (images[index]) {
                images[index].classList.remove("hidden");
            }
        }, delay);
        delay += 3000; // 3 seconds interval
    });
}

// Function to start confetti animation
function startConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 3 + "s";
        confettiContainer.appendChild(confetti);
    }
}

// Function to start balloon animation
function startBalloons() {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDelay = Math.random() * 5 + "s";
        balloonContainer.appendChild(balloon);
    }
}

// Event Listener for "Cut Your Cake" button
document.getElementById("cut-cake").addEventListener("click", () => {
    alert("Cake cutting functionality is coming soon!");
});
