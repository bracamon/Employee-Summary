// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// const Employee = require("./Employee");
const inquirer = require("inquirer");

const Manager = function() { 
    inquirer
        .prompt([
            {type: "input", name: "officeNumberInput", message: "enter office number"}
        ]);
};

Manager();

module.exports = Manager;