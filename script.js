
let employees = [
    {empId : 1, name : "Deepraj Bharadava", salary : 500000, department : "Software Engineer"},
    {empId : 2, name : "Krunal Purohit", salary : 450000, department : "Software Engineer"},
    {empId : 3, name : "Vasu Patel", salary : 450000, department : "Data Analisis"},
    {empId : 4, name : "Karan Narsana", salary : 200000, department: "UI/UX"},
    {empId : 5, name : "Jay Patel", salary : 250000, department : "Marketing"},
    {empId : 6, name : "Parv Thakar", salary : 350000, department : "Accounting"},
    {empId : 7, name : "Mayur Bhatt", salary : 600000, department : "Head"},
    {empId : 8, name : "Jay Fuletra", salary : 700000, department : "Sr. Software Engineer"},
    {empId : 9, name : "Uday Balas", salary : 500000, department : "Sr. Python Developer"},
    {empId : 10, name : "Kuldeep Rathod", salary : 50000, department : "Sr. PHP Developer"},
];

function renderTable(){

    const tbody = document.getElementById("employeeTableBody");// this gets the table body element where the row will be added.
    const searchValue = document.getElementById("searchInput").value.toLowerCase();// retrives the current value from the search input and convert into lowercase.
    const sortOrder = document.getElementById("sortSelect").value;//retrives the current value from the sort dropdown.


    const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(searchValue)); //filter employees whose name includes the search string.

    if (sortOrder === "asc") { //sorts the filtered employee list by salary in asending order and decending order. 
        filteredEmployees.sort((a, b) => a.salary - b.salary);
    } else if (sortOrder === "desc") {
        filteredEmployees.sort((a, b) => b.salary - a.salary);
    }

    
    tbody.innerHTML = "";

    filteredEmployees.map((emp) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.empId}</td>
            <td>${emp.name}</td>
            <td>${emp.salary.toLocaleString()}</td>
            <td>${emp.department || "_"}</td>
            <td><button onclick="deleteEmployee(${emp.empId})">Delete</button></td>
        `;

        tbody.appendChild(row);
    });
}

function deleteEmployee(empId) {
    employees = employees.filter(emp => emp.empId !== empId);
    renderTable();
}


function addEmployee(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    //Get form inputs
    const nameInput = document.getElementById("name"); // this gets the name input element.
    const salaryInput = document.getElementById("salary"); //this gets the salary input element.
    const departmentInput = document.getElementById("department");// this gets the department input element.

    //get the values from the inputs and trim any extra spaces.
    //trim() removes whitespace from both ends of a stiring.
    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value.trim()); //parseFloat() converts a string to a floating-point number.
    const department = departmentInput.value.trim();//this gets the value from the department input element.

    //Error fields
    const nameError = document.getElementById("nameError"); // this gets the name error element.
    const salaryError = document.getElementById("salaryError"); //this gets the salary error element.
    const departmentError = document.getElementById("departmentError");// this gets the department error element

    //clear error
    nameError.textContent = ""; 
    salaryError.textContent = "";
    departmentError.textContent = "";

    let hasError = false; //this variable is used to track if there are any errors in the form inputs.

    if(!name){ //checks if the name input is empty.
        nameError.textContent = "Name is required.";
        hasError = true;
    }
    if(isNaN(salary) || salary <= 0){ //checks if the salary input is not a number or less than or equal to 0.
        salaryError.textContent = "Salary must be Greater than 0.";
        hasError = true;
    }
    if(!department){ //checks if the department input is empty.
        departmentError.textContent = "Department is required.";
        hasError = true;
    }

    if(hasError)return; //if there are any errors, the function will return and not proceed to add the employee.

    //Generate a new employee ID(+1 to the last empId)
    const lastId = employees.length ? Math.max(...employees.map(e => e.empId)) : 0; 
    const newEmployee = {
        empId: lastId + 1,
        name: name,
        salary: salary,
        department: department
    };

    //Add new employee to the list
    employees.push(newEmployee);

    //Clear form inputs
    nameInput.value = "";
    salaryInput.value = "";
    departmentInput.value = "";

    

    //render the updated table
    renderTable();


}
// This ensures the table is rendered once when the script runs.
renderTable();

