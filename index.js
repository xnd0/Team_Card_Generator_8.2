// ---------------------------- //
// --------- index.js --------- //
// ---------------------------- //

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");



const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const {
    generateEngineerCard,
    generateManagerCard,
    generateInternCard,
    baseHtml
  } = require("./src/template");



let teamMemberObjArr = []


function generateFile() {
    fs.writeFile("./dist/index.html", baseHtml(teamMemberObjArr), (error) => {
        error ? console.log(error) : console.log("SUCCESS!")
    })
};


const init = () => {

    // -- Create Manager Class
    const createManager = () => {
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: 'What is the ID number?',
                    name: 'id',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the managers name?',
                },

                {
                    type: 'input',
                    message: 'What is your preferred method of communication?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the office number?',
                    name: 'officeNumber',
                },
            ])
            .then(answers => {
                const manager = new Manager(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.officeNumber
                );
                teamMemberObjArr.push(manager)

                console.log(manager.id + "... manager.id");
                console.log(manager.name + "... manager.name");
                console.log(manager.email + "... manager.email");
                console.log(manager.officeNumber + "... manager.officeNumber");
                // console.log(teamMemberObjArr + "... is teamMemberObjArr");

                teamMemberObjArr.push(generateManagerCard(manager));

                // addEmployees()

            });


    };


    // -- Create Engineer Class
    const createEngineer = () => {
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: 'What is the ID number?',
                    name: 'id',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the Engineer\'s name?',
                },

                {
                    type: 'input',
                    message: 'What is the Engineer\'s email address?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the Engineer\'s github username?',
                    name: 'github',
                },
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.github
                );
                teamMemberObjArr.push(engineer)

                console.log(engineer.id + "... engineer.id");
                console.log(engineer.name + "... engineer.name");
                console.log(engineer.email + "... engineer.email");
                console.log(engineer.github + "... engineer.Gitgub");
                // console.log(teamMemberObjArr + "... is teamMemberObjArr");

                teamMemberObjArr.push(generateEngineerCard(engineer));

                // addEmployees()

            });


    };


    // -- Create Intern Class
    const createIntern = () => {
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: 'What is the ID number?',
                    name: 'id',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the Intern\'s name?',
                },

                {
                    type: 'input',
                    message: 'What is the Intern\'s email address?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is/was the Intern\'s school?',
                    name: 'school',
                },
            ])
            .then(answers => {
                const intern = new Intern(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.school
                );
                // teamMemberObjArr.push(intern)
                teamMemberObjArr.push(generateInternCard(intern));

                console.log(intern.id + "... intern.id");
                console.log(intern.name + "... intern.name");
                console.log(intern.email + "... intern.email");
                console.log(intern.school + "... intern.school");
                // console.log(teamMemberObjArr + "... is teamMemberObjArr");

                generateFile();

                // addEmployees()

            });


    };


    // createManager();
    // createEngineer();
    createIntern();
    // createEngineer();
    // createManager();
    // function generateFile() {
    //     fs.writeFile("./dist/index.html", baseHtml(teamMemberObjArr), (error) => {
    //       error ? console.log(error) : console.log("file created!")
    //     })
    //   }

    // generateFile();  

};



init();