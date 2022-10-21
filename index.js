const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });

// write a example README.md with template literals 
fs.writeFile("example.md", "test", (err)=> {
    if (err) return console.log(err);
});