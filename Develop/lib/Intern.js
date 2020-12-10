// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const employee = require("employee");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {type: "input", name: "schoolInput", message: "enter School name"}
    ])


module.exports = Intern;