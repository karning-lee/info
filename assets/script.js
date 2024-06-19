let letterSpacing = 1; // Initial letter spacing

window.addEventListener('wheel', (event) => {
    const maxLetterSpacing = 9; // Maximum letter spacing value
    const minLetterSpacing = 1.4;  // Minimum letter spacing value

    // Adjust letter spacing based on scroll direction
    if (event.deltaY > 0 && letterSpacing < maxLetterSpacing) {
        letterSpacing += 69;
    } else if (event.deltaY < 0 && letterSpacing > minLetterSpacing) {
        letterSpacing -= 69;
    }

    const textElement = document.getElementById('text');
    textElement.style.letterSpacing = `${letterSpacing}px`;
});
