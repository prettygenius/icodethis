// Implement the following functionalities:
// When clicking on the Add Expense button, a new expense should be added to the #expense-list taking the name and the price of the item from the inputs.
// Clear the #item-name and #item-price inputs when the expense is successfully added to the list


const addButton = document.getElementById("add-btn")
const inputElprice = document.getElementById("item-price")
const inputElname = document.getElementById("item-name")
let expenseItems = document.getElementById("expense-list")


let expenseList = []

addButton.addEventListener('click', addToList) 

function addToList() {
  const priceValue = inputElprice.value.trim()
  const nameValue = inputElname.value.trim()

  if(priceValue && nameValue !== "") {
    expenseList.push(
      {
        price: priceValue,
       name: nameValue
      }
    )
    inputElprice.value = ""
    inputElname.value = ""
    updateList()
  } else {
    alert("please enter a value")
  }
}

function updateList() {
  let items = ""
for(let i = 0;  i < expenseList.length; i++) {
  const item = expenseList[i]
  items += `<li>${item.name} - $${item.price}</li>`

}
expenseItems.innerHTML = `<ul>${items}</ul>`
}

