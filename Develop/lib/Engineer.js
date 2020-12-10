// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const employee = require("employee");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {type: "input", name: "githubInput", message: "enter GitHub username"}
    ])


module.exports = Engineer;