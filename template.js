const getBadge = license => {
    switch(license) {
        case 'Apache 2.0':
            return ' [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'Boost':
            return ' [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'BSD 3':
            return ' [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'Creative Commons':
            return ' [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
            break;
        case 'Eclipse':
            return ' [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
        case 'GNU GPL v3':
            return ' [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'The Hippocratic 2.1':
            return '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)';
            break;
        case 'IBM 1.0':
            return ' [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
            break;
        case 'ISC':
            return ' [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'MIT':
            return ' [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break; 
        case 'Mozilla': 
        return ' [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'Open Data Commons':
            return ' [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
            break;
        case 'Perl':
            return ' [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'; 
            break;
    }

}

module.exports.createDoc = ({title,description, installation, usage, contribution, tests, username, email, license}) => {
    return doc = 
  `${getBadge(license)}
  # ${title}
  
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


