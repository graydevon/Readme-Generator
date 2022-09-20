// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = "";
    if(license === "MIT"){
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    } else if(license === "GPL") {
      badge = "![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    } else if (license === "Apache") {
      badge = "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    } else {
      badge = "";
    } return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = "";
  if(license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit"
  } else if(license === "GPL") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if(license === "Apache") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else {
    licenseLink = "";
  } return licenseLink;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = "";
  if(license === "None") {
    licenseSection = "";
  } else {
    licenseSection = "License: "
  } return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ## ${renderLicenseBadge(data.license)} 
    ## **Description:**
    ${data.description}
    <br/>
    ## **Table of Contents**
    <details>
    <summary>Click to expand</summary>
    ### [Build](#Build)
    ### [Description](#Description)
    ### [Installation](#Installation)
    ### [Usage](#Usage)
    ### [Credit](#Credit)
    ### [Tests](#Tests)
    ### [Questions](#Questions)
    ### [License](#License)
    </details>

    <br/>
    
    ## **Build**
    + ${data.languages}
    + ${data.otherBuiltWith}
    <br/>
    ## **Installation** 
    ${data.installation} 
    <br/>
    
    ## **Usage**
    ${data.usage}
    
    <br/>
    
    ## **Credit**
    ${data.credit}
    
    <br/>
    
    ## **Tests**
    ${data.tests}
    
    <br/>
    
    ## **Questions**
    Feel free to reach out with questions or comments regarding ${data.title}!
    
    ## **License**
    ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
    `;
  };
  
  
  
  
  module.exports = generateMarkdown;