const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById('inputField');
const resultContainer = document.getElementById('result');
const videoContainer = document.getElementById('video-container');

submitButton.addEventListener('click', () => {
    const userInput = inputField.value.trim().toLowerCase();

    if (userInput === 'sesamstrasse') {
        resultContainer.innerHTML = 'Das stimmt! 🎉👏<br>Du bisch die beschte!<br><br>';
        videoContainer.innerHTML = '<video onplay="showVideoTitle()"> <source src="video.mp4" type="video/mp4"> </video> <p id="videoTitle" style="display: none;"><a href="https://www.youtube.com/watch?v=0oScoQuGLxU">MADSEN - AUF DEINEM BALKON (Live von Sebis Balkon!)</a></p>';
        videoElement = document.querySelector('video');
    } else {
        resultContainer.innerHTML = 'Stimmt doch nid 🙄<br>Probiere nomol ';
        inputField.value = '';
    }
});


function showVideoTitle() {
    setTimeout(() => {
        const videoTitle = document.getElementById('videoTitle');
        videoTitle.style.display = 'block';
    }, 19000); // 18 seconds delay (18,000 milliseconds)

}
