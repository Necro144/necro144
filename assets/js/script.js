document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const textSizeToggle = document.getElementById('textSizeToggle');
    let isDarkMode = false;
    let isLargeText = false;

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
        darkModeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    textSizeToggle.addEventListener('click', function () {
        const currentFontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size');
        document.documentElement.style.setProperty('--font-size', isLargeText ? '16px' : '18px');
        isLargeText = !isLargeText;
        textSizeToggle.textContent = isLargeText ? 'Switch to Smaller Text' : 'Switch to Larger Text';
    });
});
