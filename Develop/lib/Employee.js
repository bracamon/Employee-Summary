// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

inquirer
    .prompt([
        {type: "input", name: "name", message: "enter name"},
        {type: "input", name: "id", message: "enter ID"},
        {type: "input", name: "email", message: "enter Email"}
    ])


module.exports = employee;