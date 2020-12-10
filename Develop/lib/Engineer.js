// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const Employee = require("./Employee");
const inquirer = require("inquirer");

const Engineer = function() { 
    inquirer
        .prompt([
            {type: "input", name: "githubInput", message: "enter GitHub username"}
        ]);
};

Engineer();

module.exports = Engineer;