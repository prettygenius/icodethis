// Implement the following functionalities:
// Your task for this challenge is to apply the .active class to the <a> tag that is clicked.

// This will make the selected item pop!
const menuItems = document.querySelectorAll('a')

menuItems.forEach((item) => {
    item.addEventListener('click', activeLink)
})

function activeLink(event) {
    menuItems.forEach((item) => {
        item.classList.remove('active')
    })
      event.currentTarget.classList.add('active')
}