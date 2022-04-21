/* PSEUDOCODE 
1. download inquirer
    npm init -y
    npm install inquirer
2. create a template read me 
    A. includes the all the criteria to generate a read me 
        a. maybe include descriptors inside of the readme to remind the person what goes where
3.create the prompts
    A. including all the prompts to these questions: 
        a. Description, table of contents, installation, usage, liscense, contributors, test, and Questions, github username and emaiil
        b. add a question what would you like this read me to be called
            i. what are badges 
5. create afunction to split the read me
6. createa new file with prompts in there 
    A. declare a fs
    write the function in a designated file for the generated read me 
*/

console.log('Welcome to your new README generator!')
console.log('This is going to generate a read me for you to use for your projects. All of the questions bellow will be placed into your new readme.')
const inquirer = require ('inquirer');
const fs = require('fs');

    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is your repo name?',
            name: 'reponame',
        },
        {
            type: 'input',
            message: 'Can you descrbe your project to me?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What motivated you to make this project?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'What does it take to use this program?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What are you using this app for?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which liscence did you get from github?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software Liscense 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License', 'The Unilicense'],
        },
        {
            type:'input',
            message: 'If you had any contributors, what are their Github names?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What tests did you run?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'what is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is yoru email?',
            name: 'email',
        }
    ])