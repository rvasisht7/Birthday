const present = document.getElementById('present');
const lid = document.querySelector('.lid');
const message = document.getElementById('message');
const imageGallery = document.getElementById('imageGallery');

// Array of image URLs
const images = [
    'images/photo1.jpg', // Path to the first photo
    'images/photo2.jpg', // Path to the second photo
    'images/photo3.jpg', // Path to the third photo
    'images/photo4.jpg', // Path to the fourth photo
    'images/photo5.jpg'  // Path to the fifth photo
];

present.addEventListener('click', () => {
    // Animate the lid
    lid.style.transform = 'rotateX(180deg)';

    // Show the message
    message.classList.remove('hidden');

    // Show the image gallery after a short delay
    setTimeout(() => {
        loadImages();
        imageGallery.classList.remove('hidden');
    }, 500);

    // Play celebration music
    const audio = new Audio('celebration.mp3');
    audio.play();

    // Launch confetti
    setTimeout(() => {
        confetti();
    }, 500);
});

// Function to load images dynamically
function loadImages() {
    imageGallery.innerHTML = ''; // Clear any existing images
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Birthday Girl';
        imageGallery.appendChild(img);
    });
}

// Confetti function
function confetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = '10px';
        confettiPiece.style.height = '10px';
        confettiPiece.style.background = getRandomColor();
        confettiPiece.style.borderRadius = '50%';
        confettiPiece.style.top = `${Math.random() * 100}vh`;
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        confettiContainer.appendChild(confettiPiece);
    }
}

// Random color generator for confetti
function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 70%)`;
}

// Add keyframes for falling confetti
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
    }
}`;
document.head.appendChild(style);
