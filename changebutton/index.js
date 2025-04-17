/*
Implement the following changes to the button when it's clicked:
change the background color to #fef6f5
change the text color of the button to #f55153
change the text content to “Clicked!”
*/

const btn = document.getElementById('btn')

btn.addEventListener('click', changeButton)

function changeButton() {
    btn.style.backgroundColor = '#fef6f5'
    btn.style.color = '#f55153'
    btn.textContent = 'Clicked!'
}