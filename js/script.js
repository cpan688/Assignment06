// Define global variables
let id, name, extension, email, department;
let form = document.getElementById("addForm");      // Get the 'Add Employee' Form object from the DOM
let table = document.getElementById('employees')    // Get the 'Employees Table' object from the DOM
let output = document.getElementById('empCount')
let empCnt = 0;

// Create a helper function to process each form element within the form
const $ = (id) => document.getElementById(id);

// Handle add Employee event (when 'Add Employee' button is pressed)
form.addEventListener("submit", (e) => {
    e.preventDefault();                             // Prevent form submission default behavior
    
    id = $('id');                                   // Get the input values from Form elements
    name = $('name');
    extension = $('extension');
    email = $('email');
    department = $('department');
    submit = $('submit');

    // Create a new row in the table for the new input values from the form
    let row = table.insertRow();

    // Create new cells within the new row
    let cellID = row.insertCell();
    let cellNAME = row.insertCell();
    let cellEXTENSION = row.insertCell();
    let cellEMAIL = row.insertCell();
    let cellDEPT = row.insertCell();
    
    // Add input values as text nodes within the newly created cells
    // Use appendChild to add text nodes to the cells in the new row
    cellID.appendChild(document.createTextNode(id.value));
    cellNAME.appendChild(document.createTextNode(name.value));
    cellEXTENSION.appendChild(document.createTextNode(extension.value));
    cellEMAIL.appendChild(document.createTextNode(email.value));
    cellDEPT.appendChild(document.createTextNode(department.value));
     
    let deleteBtn = document.createElement('button');   // Create a DELETE BUTTON and style it with BOOTSTRAP
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    let textDelete = document.createTextNode('X')       // Create text node for DELETE button and set it to 'X'
    deleteBtn.appendChild(textDelete)                   // Append text node to DELETE button
    row.appendChild(deleteBtn);                         // Append DELETE button to the row
    table.appendChild(row);                             // Append the newly created row into table
    empCnt += 1;                                        // Increment employee count
    showEmpCount();                                     // Refresh Employee Count Display
    form.reset();                                       // Clear the Form
    document.getElementById("id").focus();              // Set the cursor on the Employee ID field

});

    // Handle the DELETE button click event
    document.getElementById('employees').addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete this employee?')) {
            // let selectedRow = e.path[1];                        // Get the selected row to delete
            // table.deleteRow(selectedRow);                       // Delete the selected row
            if (e.target.classList.contains("delete")) {
                e.target.closest("tr").remove();
                empCnt -= 1;                                        // Decrement the employee count
                showEmpCount();                                     // Refresh Employee Count Display
            }
        }
    });

    // Refresh Employee Count Display
    function showEmpCount() {
        if (empCnt > 0) {
            output.innerHTML = `(${empCnt})`;
        } else {
            output.innerHTML = "";
        }
    }