const inquirer = require('inquirer');
const fs = require('fs');
const { create } = require('domain');

inquirer
  .prompt([
    {
      name: 'title',
      message: 'What is the title of your repository?'
    },
    {
      name: 'description',
      message: 'Write your description for the repository?'
    },
    {
      name: 'installation',
      message: 'What are some instructions to install your code?'
    },
    {
      name: 'usage',
      message: 'How do you use the code in the repository?'
    },
    {
      name: 'contribution',
      message: 'Who helped you out?'
    },
    {
      name: 'tests',
      message: 'What are some test cases to check your work?'
    },
    {
      type: 'list',
      message: "What license are you using?",
      name: 'license',
      choices: ['Apache 2.0', 'Boost', 'BSD 3', 'Creative Commons', 'Eclipse', 'GNU GPL v3', 'The Hippocratic 2.1', 'IBM 1.0', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl' ]
    },
    {
      name: 'username',
      message: 'What is your Git Hub username?'
      // use this to present a link to a git hub profile
    },
    {
      name: 'email',
      message: 'What is your email?'
      // use this in questions
    },
  ])
  .then(answers => {
    let doc = createDoc(answers);

    fs.writeFile("example.md", doc, (err)=> {
      if (err) return console.log(err);
  });
  });

// write a example README.md with template literals 


var createDoc = ({title,description, installation, usage, contribution, tests, username, email, license}) => {
  return doc = 
`# ${title}

# Description

${description}

# Table of Contents
- [Installation](#installation---)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
# Installation

${installation}

# Usage

${usage}

# License

This project is covered under the ${license} License.

# Contributing

${contribution}

# Tests

${tests}

# Questions

Want to check out more of my work?  Check me out at my github [profile](https://github.com/${username}).

Have any questions?

Feel free to email me at ${email}.
`;
}