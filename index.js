const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
console.log(employee);
console.log(updateEmployeeWithKeyAndValue(employee, "name", 'John'));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
console.log(employee);

