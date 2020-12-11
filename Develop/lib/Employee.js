// TODO: Write code to define and export the Employee class
// const Employee = require("./Employee");
const inquirer = require("inquirer");

class Employee {
    constructor(name) {
        this.name = name;
    };
    // constructor(id) {
    //     this.id = id;
    // };
    // constructor(email) {
    //     this.email = email;
    // };
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    };
};

const otto = new Employee(`Otto`);

otto.introduce();

// const Employee = function() { 
//     inquirer
//     .prompt([
//         {type: "input", name: "name", message: "enter name"},
//         {type: "input", name: "id", message: "enter ID"},
//         {type: "input", name: "email", message: "enter Email"},
//         {type: "list", name: "roleInput", message: "select role", choices: [
//             "engineer",
//             "manager",
//             "intern",
//             ],
//         },
//     ]);
// };


// inquirer
//     .prompt([
//         {type: "input", name: "nameInput", message: "enter name"},
//         {type: "input", name: "idInput", message: "enter ID"},
//         {type: "input", name: "emailInput", message: "enter Email"},
//         {type: "list", name: "roleInput", message: "select role", choices: [
//             "engineer",
//             "manager",
//             "intern",
//             ],
//         },
//     ])

// Employee();

module.exports = Employee;