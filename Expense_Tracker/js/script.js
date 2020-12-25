//TODO: Add remove button to expenses

//Selections

let addButton = document.querySelector("#add-btn");
let expenseTable = document.querySelector("#expense-table")


//Functions

function addExpense(event){
    let inputExpensename = document.querySelector("#expenseName").value;
    let inputAmount = document.querySelector("#amount").value;
    let inputDate = document.querySelector("#date").value;
    let defaultTD = document.querySelector("#default-data")   
    let inputCurrency = document.querySelector("#currency").value;

    
    if (!isNaN(inputAmount) && inputExpensename !== "" && inputExpensename !== null && inputAmount !== "" && inputAmount !== null && inputDate !== null && inputDate !== ""){
        expenseTable.innerHTML += "<tr><td>"+inputExpensename +"</td>"+ "<td>"+inputDate +"</td>"+ "<td>"+inputAmount+" " + inputCurrency +"</td>"+"<td><button class='remove-button'>Remove</button></td>"+"</tr>";
        document.querySelector("#amount").placeholder = 'Enter amount';
        document.querySelector("#amount").value = "";
        document.querySelector("#date").value ="";
        document.querySelector("#expenseName").value ="";
        updateRemoveButton();


    }
    else{
        document.querySelector("#amount").placeholder ="Invalid input, try again";
        document.querySelector("#amount").value = "";
        document.querySelector("#expenseName").placeholder = "Invalid input, try again";
        document.querySelector("#expenseName").value = "";
        document.querySelector("#date").value ="";
    }
    
}


function removeExpense(event){
    let rowIndex = this.parentNode.parentNode.rowIndex;
    console.log(rowIndex); //Used for debugging

    expenseTable.deleteRow(rowIndex);
}

function updateRemoveButton(){
    //Adds removeExpense function on click for all remove buttons.
    let getRemoveButtons = document.querySelectorAll("button[class='remove-button']");
    for (let i = 0; i<getRemoveButtons.length; i++){
        getRemoveButtons[i].addEventListener("click", removeExpense);
    }
}


addButton.addEventListener("click", addExpense)
