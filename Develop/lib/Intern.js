// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// const Employee = require("./Employee");
const inquirer = require("inquirer");

const Intern = function() { 
    inquirer
        .prompt([
            {type: "input", name: "schoolInput", message: "enter School name"}
        ]);
};

Intern();

module.exports = Intern;