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

//Functions
function addExpense(event){
    event.preventDefault();
    if(isValid() == false){
        console.log("Not Passed!");
        return;
    }
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

function isValid(){
    if(isInputValid() == false)return false;
    if(isQtyValid() == false)return false;
    if(isAmtValid() == false)return false;
    return true;
}
function isInputValid(){
    
    if(materialInput.value == ""){
        window.alert("Material can't be empty");
        return false;
    }
    
    if(materialInput.value.length > 15){
        window.alert("Material can only have 15 chars");
        return false;
    }
    
    if(containsNum(materialInput.value) == true){
        window.alert('Material name should not contain a number');
        return false;
    }
    if(expenses.getElementsByTagName("div").length > 20){
        window.alert("You can only add upto 20 expenses");
        return false;
    }
    const expensesList = expenses.childNodes;
    var task_valid = true;
    expensesList.forEach(function(expense) {
        if(task_valid == false)return false;
        if(materialInput.value == expense.getElementsByTagName('li').item(0).innerText){
            window.alert("Can't store duplicates, Please edit the prevoius entry!");
            task_valid = false;
            return false;
        }
    });
    // returning validation
    return task_valid;
}

function containsNum(str){
    for(var index = 0;index<str.length;index++){
        if(str[index] >= '0' && str[index] <= '9'){
            return true;
        }
        
    }
    return false;
}

function isQtyValid(){
    if(!(materialQty.value > 0)){
        window.alert('Quantity should be greater than 0.')
        return false;
    }
}

function isAmtValid(){
    if(!(materialCst.value > 0)){
        window.alert('Cost should be greater than 0.')
        return false;
    }
}