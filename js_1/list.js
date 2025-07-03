let employees = [
    {empId : 1, name : "Deepraj Bharadava", salary : 500000, department : "Software Engineer"},
    {empId : 2, name : "Krunal Purohit", salary : 450000, department : "Software Engineer"},
    {empId : 3, name : "Vasu Patel", salary : 450000, department : "Data Analysis"},
    {empId : 4, name : "Karan Narsana", salary : 200000, department: "UI/UX"},
    {empId : 5, name : "Jay Patel", salary : 250000, department : "Marketing"},
    {empId : 6, name : "Chintan Bhalodiya", salary : 350000, department : "Java Developer"},
    {empId : 7, name : "Uday Balas", salary : 60000, department : "Python Developer"},
    {empId : 8, name : "Karan Maheta", salary : 30000, department : "Digital Marketing"},
    {empId : 9, name : "Jigar Patel", salary : 45000, department : "Video Editor"},
    {empId : 10, name : "Kuldeep Rathod", salary : 45000, department : ".Net Developer"}
];

function renderTable(){
    const tbody = document.getElementById("employeeTableBody");
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const sortOrder = document.getElementById("sortSelect").value;

    // Check if there is new data from form
    const newEmpJSON  = sessionStorage.getItem("newEmployee");
    if (newEmpJSON) {
        const newEmp = JSON.parse(newEmpJSON);
        const lastId = employees.length ? Math.max(...employees.map(e => e.empId)) : 0;
        newEmp.empId = lastId + 1;
        employees.push(newEmp);
        sessionStorage.removeItem("newEmployee");
    }

    let filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(searchValue));
    if (sortOrder === "asc") {
        filteredEmployees.sort((a, b) => a.salary - b.salary);
    } else if (sortOrder === "desc") {
        filteredEmployees.sort((a, b) => b.salary - a.salary);
    }

    tbody.innerHTML = "";
    filteredEmployees.forEach(emp => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.empId}</td>
            <td>${emp.name}</td>
            <td>${emp.salary.toLocaleString()}</td>
            <td>${emp.department}</td>
            <td><button onclick="deleteEmployee(${emp.empId})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

function deleteEmployee(empId) {
    employees = employees.filter(emp => emp.empId !== empId);
    renderTable();
}

renderTable();