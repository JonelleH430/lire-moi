const inquirer = require('inquirer');
const readmeGenerated = require('./develop/utils/readmeGenerated');
const fs = require('fs');
const path = require('path');

const prompts = [
    {
        type: 'input',
        message: 'Give step by step details oon how to install this project',
        name: 'install' 
    },
    {
        type: 'input',
        name: 'Use',
        message: 'How do you use this project?', 
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Who created this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?',
    },
    {
        type: 'check-box',
        name: 'licensing',
        message: 'Select licensing',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public 2.0',
            'Apache 2.0',
            'MIT',
            'Boost Software 1.0',
            'The Unilicense',
        ] 
    },
    {
        type: 'input',
        name: 'email',
        message: 'type your email here',
    },
    {
        type: 'input',
        name: 'github username',
        message: 'type your github username here',
    },
    {
        type: 'input',
        name: 'github repo',
        message: 'link your github repo here ',
    },



]

// const info = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of your project? (Required)',
//             validate: titleInput => {
//                 if (titleInput) {
//                     return true;
//                 } else {
//                     console.log('title');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'Information',
//             message: 'Provide Information for your application (Required)',
//             validate: informationInput => {
//                 if(informationInput) {
//                     return true;
//                 } else {
//                     console.log('Provide Info');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'link',
//             message: 'Provide a link to the deployed application (Required)',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide a link to the deployed application');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'list',
//             name: 'licensing',
//             message: 'What licence are you using on this project?',
//             choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'The Unlicense'],
//         },
//         {
//             type: 'input',
//             name: 'use',
//             message: 'Provide description of how to use your app (Required)',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a description of how to use your app');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'install',
//             message: 'Provide step-by-step instructions of how to get the development environment running. Seperate steps with "," (Recommended)'
//         },
//         {
//             type: 'input',
//             name: 'creator',
//             message: 'If you would like other developers to be able to contribute to this application, please provide guidelines on how to do so (Recommended)'
//         },
//         {
//             type: 'input',
//             name: 'test',
//             message: 'Provide examples of how to run tests on your application (Recommended)'
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'Provide the link to your GitHub (Required)',
//             validate: nameInput => {
//                 if(nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide GitHub link');
//                     return false;
//                 }
//             }
//         },     
//     ])
// };

// function writeToFile(info) {
    
//     fs.writeFile('./dist/README.md', info, err =>{
//         if (err) throw err;
//         console.log('README file completed!');
//     })
// }

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init(){
    inquirer.prompt(prompts)
    .then((inquirerResponse)=> {
        writeToFile('README.md'), readmeGenerated({...inquirerResponse});
    })
} 
init()