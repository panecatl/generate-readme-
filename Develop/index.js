// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Where the readme will be developed
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gtihub',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a correct GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validte: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a correct description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license does your project need?',
            choices: ['MIT', 'GNU'],
            default: ['MIT'],
            validate: choiceInput => {
                if (choiceInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps requires to instal your application!')
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter proper usage description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to check tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who all contributed to this app?'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
