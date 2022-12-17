const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let departmentArr = []
let roleArr = []
let employeeArr = []


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tracker_db'
    },
    console.log(`Connected to database.`)
);

inquirer.prompt([
    {
        name: "question",
        type: "list",
        choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Quit"]
    }
]).then(ans => {
    switch (ans.question) {
        case "View Departments":
            viewDepartments();
            break;

        case "View Roles":
            viewRoles()
            break;

        case "View Employees":
            viewEmployees()
            break;

        case "Add Department":
            addDepartment()
            break;

        case "Add Role":
            addRole()
            break;

        case "Add Employee":
            addEmployee()
            break;

        case "Update Employee Role":
            updateEmployee ()
            break;

        default:
            console.log("See you next time!")
            break;
    }
})

function init() {
    departmentArr = []
    roleArr = []
    employeeArr = []

    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Quit"]
        }
    ]).then(ans => {
        switch (ans.question) {
            case "View Departments":
                viewDepartments();
                break;

            case "View Roles":
                viewRoles()
                break;

            case "View Employees":
                viewEmployees()
                break;

            case "Add Department":
                addDepartment()
                break;

            case "Add Role":
                addRole()
                break;

            case "Add Employee":
                addEmployee()
                break;

            case "Update Employee Role":
                updateEmployee ()
                break;

            default:
                console.log("See you next time!")
                break;
        }
    })
}

function viewDepartments () {
    db.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log('')
        console.table(result)
        console.log('')
        init()
    });
}

function viewRoles () {
    db.query(`SELECT * FROM roles`, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log('')
        console.table(result)
        console.log('')
        init()
    });
}

function viewEmployees () {
    db.query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log('')
        console.table(result)
        console.log('')
        init()
    });
}