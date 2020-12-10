// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

inquirer
    .prompt([
        {type: "input", name: "nameInput", message: "enter name"},
        {type: "input", name: "idInput", message: "enter ID"},
        {type: "input", name: "emailInput", message: "enter Email"},
        {type: "list", name: "roleInput", message: "select role", choices: [
            "engineer",
            "manager",
            "intern",
            ],
        },
    ])


module.exports = Employee;