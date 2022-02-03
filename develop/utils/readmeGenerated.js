function readmeGenerated(data) {
  return `
  
  ## Information

  ${data.information}
  
  ## Index

  *[Install](#install)
  *[Test](#test)
  *[Use](#use)
  *[Licensing](#licensing)
  *[Creator](#creator)
 
  
  ## Install 
  ${data.install}
  
  ## Use
  ${data.use}
  
  ## Test
  ${data.test}
  
  ## Creator
  ${data.creator}
  
  ## Licensing
  ${data.licensing}
  
  `
}


function renderBadge(licensing) {
    
    switch (licensing) {
      
      case 'GNU AGPLv3': return `![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-brightgreen)`;
      case 'GNU GPLv3': return `![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)`;
      case 'GNU LGPLv3': return `![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen)`;
      case 'Mozilla Public 2.0': return `![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%202.0-brightgreen)`;
      case 'Apache 2.0': return `![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-brightgreen)`;
      case 'MIT': return `![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)`;
      case 'Boost Software 1.0': return `![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%201.0-brightgreen)`;
      case 'The Unilicense': return `![The Unilicense](https://img.shields.io/badge/license-Unlicense-brightgreen)`;
    }
  }
  
  function generateInstall(install) {
    
    const steps = install.split(', ');
  
    return `${steps.map((element, index) => {
      
      return `
      
      ${index++}. ${element}`
      })}`
  };
  
  function generateLicensing(licensing) {
    switch (licensing) {
      case 'GNU AGPLv3': return `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
      case 'GNU GPLv3': return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
      case 'GNU LGPLv3': return `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`;
      case 'Mozilla Public 2.0': return `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
      case 'Apache 2.0': return `[Apache Licence 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
      case 'MIT': return `[MIT License](https://choosealicense.com/licenses/mit/)`;
      case 'Boost Software 1.0': return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
      case 'The Unilicense': return `[The Unilicese](https://choosealicense.com/licenses/unlicense/)`;
    }
  };
   
  module.exports = markdowndata => {
    const { install, licensing, ...data} = markdowndata;
    return `
    
    # ${data.title}
    
    ${renderBadge(licensing)}
    
    ## Information
    
    ${data.information}
    
    [Deployed Application](${data.link})
   
    ## Index
    
    * [Install](#install)
    * [Use](#use)
    * [Creator](#creator)
    * [Test](#test)
    * [Licensing](#licensing)
     
    ## Install
    
    ${generateInstall(install)}
    
    ## Use
   
    ${data.use}
    
    ## Creator
    ${data.creator}
    
    ## Test
    
    ${data.test}
    
    ## Licensing
    
    ${generateLicensing(licensing)}
    
    [My GitHub](https://github.com/${data.github}) | 
  `;
  }

  module.exports = readmeGenerated;