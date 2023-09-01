const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById('inputField');
const resultContainer = document.getElementById('result');
const videoContainer = document.getElementById('video-container');

submitButton.addEventListener('click', () => {
    const userInput = inputField.value.trim().toLowerCase();

    if (userInput === 'sesamstrasse') {
        resultContainer.textContent = 'Das stimmt du bisch die beschte!';
        videoContainer.innerHTML = '<iframe width="560" height="315" src="https://youtube.com/embeded/0oScoQuGLxU?si=2GgH4IzDpz8BxgQ9" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    } else {
        resultContainer.textContent = 'Stimmt doch nid, probiere nomol';
        inputField.value = '';
    }
});


