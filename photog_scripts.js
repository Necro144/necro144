const darkModeToggle = document.getElementById('darkModeToggle');
const increaseTextSize = document.getElementById('increaseTextSize');
const decreaseTextSize = document.getElementById('decreaseTextSize');
let currentTextSize = 16;

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

increaseTextSize.addEventListener('click', () => {
    if (currentTextSize < 36) {
        currentTextSize += 2;
        document.body.style.fontSize = currentTextSize + 'px';
        updateTextSize();
    }
});

decreaseTextSize.addEventListener('click', () => {
    if (currentTextSize > 12) {
        currentTextSize -= 2;
        document.body.style.fontSize = currentTextSize + 'px';
        updateTextSize();
    }
});

function updateTextSize() {
    document.querySelectorAll('.name, .description, .link').forEach(element => {
        element.style.fontSize = currentTextSize + 'px';
    });
}

// Modal functionality
const photos = document.querySelectorAll('.photo');
const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementsByClassName('close')[0];

photos.forEach(photo => {
    photo.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
