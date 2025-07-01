//Add Employee
function addEmployee(event) {
    event.preventDefault();

    // Get form values
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");
    const departmentInput = document.getElementById("department");

    // Validate form values
    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value.trim());
    const department = departmentInput.value.trim();

    // Check if any error exists
    const nameError = document.getElementById("nameError");
    const salaryError = document.getElementById("salaryError");
    const departmentError = document.getElementById("departmentError");

    // Clear error messages
    nameError.textContent = "";
    salaryError.textContent = "";
    departmentError.textContent = "";

    // Validate form values
    let hasError = false;
    if (!name) {
        nameError.textContent = "Name is required.";
        hasError = true;
    }
    if (isNaN(salary) || salary <= 0) {
        salaryError.textContent = "Salary must be greater than 0.";
        hasError = true;
    }
    if (!department) {
        departmentError.textContent = "Department is required.";
        hasError = true;
    }
    if (hasError) return; 

    // Save to sessionStorage
    const newEmployee = {
        name: name,
        salary: salary,
        department: department
    };
    sessionStorage.setItem("newEmployee", JSON.stringify(newEmployee)); 

    // Redirect back
    window.location.href = "list.html"; 
}