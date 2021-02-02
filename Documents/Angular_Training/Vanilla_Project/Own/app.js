// Selector
const materialInput = document.querySelector('.material-input');
const materialQty = document.querySelector('.material-qty');
const materialCst = document.querySelector('.material-cst');
const materialSubmit = document.querySelector('.material-submit');
const message = document.querySelector('.message')
const expenses = document.querySelector('.expenses')

//Event Listeners
materialSubmit.addEventListener('click', addExpense);
expenses.addEventListener('click', editDelExpense);

//F unctions
function addExpense(event){
    event.preventDefault();
    const expenseDiv = document.createElement('div')
    expenseDiv.classList.add("expense")

    const newExpenseInput = document.createElement('li')
    newExpenseInput.innerText = materialInput.value
    newExpenseInput.classList.add("expense-item")
    expenseDiv.appendChild(newExpenseInput)

    const newExpenseQty = document.createElement('li')
    newExpenseQty.innerText = materialQty.value
    newExpenseQty.classList.add("expense-qty")
    expenseDiv.appendChild(newExpenseQty)

    const newExpenseCst = document.createElement('li')
    newExpenseCst.innerText = materialCst.value
    newExpenseCst.classList.add("expense-amt")
    expenseDiv.appendChild(newExpenseCst)


    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit-btn');

    expenseDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    deleteButton.classList.add('del-btn');

    expenseDiv.appendChild(deleteButton);


    expenses.appendChild(expenseDiv)
    
    // //Clear Value
    
    materialInput.value = "";
    materialQty.value = "";
    materialCst.value = "";

    // const mes = document.createElement('li')
    // mes.innerText = "Added";
    // message.appendChild(mes);
    // window.alert("Added");
}

function editDelExpense(event){
    const item = event.target
    const expense = item.parentElement;
    console.log(expense)
    if(item.classList.contains("edit-btn")){
        materialInput.value = expense.getElementsByTagName("li").item(0).innerHTML;
        materialQty.value = expense.getElementsByTagName("li").item(1).innerHTML;
        materialCst.value = expense.getElementsByTagName("li").item(2).innerHTML;
        expense.remove();
        window.alert("Entry is at the forms, you can edit now.");
    }
    else if(item.classList.contains("del-btn")){
        expense.remove();
    }
}