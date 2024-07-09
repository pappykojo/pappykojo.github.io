document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('clickMeButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = 'Button clicked!';
    });
});
