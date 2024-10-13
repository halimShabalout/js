let employees = []; // To store employee data
let editingEmployee = null;

// Fetch initial employee data from JSON file
fetch('employees.json')
  .then(response => response.json())
  .then(data => {
    employees = data.staffs;
    displayEmployees();
  })
  .catch(error => console.error('Error loading employee data:', error));

// Display employees in the table
function displayEmployees() {
  const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
  employeeTable.innerHTML = ''; // Clear previous rows

  employees.forEach((em, index) => {

    const row = employeeTable.insertRow();

    row.insertCell(0).textContent = em.id;
    row.insertCell(1).textContent = em.name;
    row.insertCell(2).textContent = em.position;
    row.insertCell(3).textContent = em.department;
    row.insertCell(4).textContent = em.salary;

    const actionCell = row.insertCell(5);

    // Add Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editEmployee(index);
    actionCell.appendChild(editButton);

    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteEmployee(index);
    actionCell.appendChild(deleteButton);
  });
}

// Add a new employee
document.getElementById('employeeForm').addEventListener('submit',  (event)=> {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const position = document.getElementById('position').value;
  const department = document.getElementById('department').value;
  const salary = document.getElementById('salary').value;

  if (editingEmployee !== null) {
    // Edit existing employee
    employees[editingEmployee].name = name;
    employees[editingEmployee].position = position;
    employees[editingEmployee].department = department;
    employees[editingEmployee].salary = salary;
    editingEmployee = null;
  
  } else {
    // Add new employee
    const newEmployee = {
      id: employees.length + 1, // Increment ID
      name: name,
      position: position,
      department: department,
      salary: salary
    };
    employees.push(newEmployee);
  }

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('position').value = '';
  document.getElementById('department').value = '';
  document.getElementById('salary').value = '';

  displayEmployees();
});

// Edit employee details
function editEmployee(index) {
  const employee = employees[index];
  console.log(index)

  document.getElementById('name').value = employee.name;
  document.getElementById('position').value = employee.position;
  document.getElementById('department').value = employee.department;
  document.getElementById('salary').value = employee.salary;

  editingEmployee = index;
}

// Delete an employee
function deleteEmployee(index) {
  employees.splice(index, 1); // Remove employee
  displayEmployees(); // Re-display updated list
}

