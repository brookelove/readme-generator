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
            type: 'input',
            message: 'PLease add in a still image url please',
            name: 'still',
        },
        {
            type: 'input',
            message: 'PLease add in a GIF image url please',
            name: 'GIF',
        },
        {
            type: 'list',
            message: 'Which licence did you get from github?',
            name: 'license',
            choices: ['Apache_2.0', 'GPL_v3.0', 'MIT', 'BSD_2-Clause', 'BSD_3-Clause', 'CC0_v1.0', 'EPL_2.0', 'AGPL_v3.0', 'GPL_v2.0', 'LGPL_v2.1', 'Mozilla', 'Unilicense'],
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
    .then (function ({reponame, description, motivation, install, usage, name, contributors, tests, github, email, license, GIF, still}) {
    console.log(reponame, description, motivation, install, usage, name, contributors, tests, github, email, license)
    //remove spaces from this badge so it can generate a page onload
    let readme = `
## ${reponame}

[![License](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

## Table of Contents

1. [Description](#descript)

2. [Motivation](#motivation)

3. [Installation Instructions](#installation-instructions)

4. [Usage](#usage)

5. [Mock Up](#mock-up)

5. [Liscense](#license)

6. [Contributors](#contributors)

7. [Test](#tests)

8. [Questions](#questions)

# Description

    ${description}

# Motivation

    ${motivation}

# Install Instructions

    ${install}

# Usage

    ${usage}

# Mock Up

![Image of ${reponame}](${still})
    
![Gif of ${reponame}](${GIF})

# License

[${license}](./LICENSE)

# Contributors

    ${contributors}

# Tests

    ${tests}

# Questions? 

Feel Free to reach me at!

${email} | 

[${github} Profile](https://github.com/${github})`

    fs.writeFileSync(`${reponame}.md`, readme)
    })