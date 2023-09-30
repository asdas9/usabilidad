const darkModeToggle = document.getElementById('darkModeToggle');
const themeLink = document.getElementById('theme-link');
darkModeToggle.addEventListener('click', function() {
    if (themeLink.getAttribute('href') == 'css/styles.css') {
        themeLink.href = 'css/dark-mode.css';
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        themeLink.href = 'css/styles.css';
        darkModeToggle.textContent = 'Modo Oscuro';
    }
});