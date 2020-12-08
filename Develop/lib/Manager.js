// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const employee = require("employee");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {type: "input", name: "officeNumber", message: "enter office number"}
    ])


module.exports = Manager;