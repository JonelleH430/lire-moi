const inquirer = require('inquirer');
const readmeGenerated = require('./develop/utils/readmeGenerated');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Information',
            message: 'Provide Information for your application (Required)',
            validate: informationInput => {
                if(informationInput) {
                    return true;
                } else {
                    console.log('Provide Info');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Provide a link to the deployed application (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a link to the deployed application');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licensing',
            message: 'What licence are you using on this project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'use',
            message: 'Provide description of how to use your app (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of how to use your app');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide step-by-step instructions of how to get the development environment running. Seperate steps with "," (Recommended)'
        },
        {
            type: 'input',
            name: 'creator',
            message: 'If you would like other developers to be able to contribute to this application, please provide guidelines on how to do so (Recommended)'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide examples of how to run tests on your application (Recommended)'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide the link to your GitHub (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please provide GitHub link');
                    return false;
                }
            }
        },     
    ])
};

function writeToFile(info) {
    
    fs.writeFile('./dist/README.md', info, err =>{
        if (err) throw err;
        console.log('README file complete!');
    })
}