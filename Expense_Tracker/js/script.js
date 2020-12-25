/*
TODO
1. add remove button for expenses. 
*/

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

    
    if (!isNaN(inputAmount)){
        expenseTable.innerHTML += "<tr><td>"+inputExpensename +"</td>"+ "<td>"+inputDate +"</td>"+ "<td>"+inputAmount+" " + inputCurrency +"</td>"+"</tr>";
        document.querySelector("#amount").placeholder = 'Enter amount';
        document.querySelector("#amount").value = "";
        document.querySelector("#date").value ="";
        document.querySelector("#expenseName").value ="";

    }
    else{
        document.querySelector("#amount").placeholder ="Invalid input, try again"
        document.querySelector("#amount").value = "";
    }
    
}



addButton.addEventListener("click", addExpense)
