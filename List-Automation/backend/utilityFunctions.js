const industry_names = require('./industry.js');
const machine_names = require('./data.js');
const country_names = require('./country.js'); 

 const findMatchingMachineNames =  function (input) {
    const lowerInput = input.toLowerCase(); 
    
    // First, check for an exact match in keys
    const exactMatch = Object.keys(machine_names).find(key => key.toLowerCase() === lowerInput);
    if (exactMatch) {
        return machine_names[exactMatch];
    }
  
    // If no exact match in keys, split the input by "/" to handle multiple words 
    const inputWords = lowerInput.split(' / ');
  
    // Iterate through the keys to find a match
    for (const key of Object.keys(machine_names)) {
        const lowerKey = key.toLowerCase();
        const keyWords = lowerKey.split(' / ');
        const regex = new RegExp(key, 'i');
  
        // Check if any of the input words match any of the key words
        if (inputWords.some(inputWord => keyWords.includes(inputWord)) || regex.test(input)  && inputWords.some(inputWord => regex.test(inputWord))) {
            return machine_names[key];
        }
    }

    //searching inside values
  
    const matchingValue = Object.keys(machine_names).find(key => machine_names[key].toLowerCase() === lowerInput);
    if (matchingValue) {
        return machine_names[matchingValue];
    } 

     // If no match found in keys, try regex matching
     const regexMatch = Object.keys(machine_names).find(key => {
        const regex = new RegExp(input, 'i'); // 'i' for case-insensitive matching
        
        return regex.test(key);
    });

    if (regexMatch) {  
        
        return machine_names[regexMatch];
    }
  
    return null; // No match found

  }

  // Function for finding matching machine names
   const findMatchingIndustry =  function (input) {
    const lowerInput = input.toLowerCase(); 
    
    // First, check for an exact match in keys
    const exactMatch = Object.keys(industry_names).find(key => key.toLowerCase() === lowerInput);
    if (exactMatch) {
        return industry_names[exactMatch];
    }

    // If no exact match in keys, split the input by "/" to handle multiple words
    const inputWords = lowerInput.split(' / ');

    // Iterate through the keys to find a match
    for (const key of Object.keys(industry_names)) {
        const lowerKey = key.toLowerCase();
        const keyWords = lowerKey.split(' / ');
        const regex = new RegExp(key, 'i');

        // Check if any of the input words match any of the key words
        if (inputWords.some(inputWord => keyWords.includes(inputWord))  || regex.test(input) || keyWords.some((key) => input.includes(key))) {
            return industry_names[key]; 
        }
    }

   //trying to find the match in values
    const matchingValue = Object.keys(industry_names).find(key => industry_names[key].toLowerCase() === lowerInput);
    if (matchingValue) {
        return industry_names[matchingValue];
    } 

     // If no match found in keys, try regex matching 
    const regexMatch = Object.keys(industry_names).find(key => {
      const regex = new RegExp(input, 'i'); // 'i' for case-insensitive matching
      return regex.test(key);
  });

  if (regexMatch) {  
      return industry_names[regexMatch];
  }

    return null; // No match found
}


  const findMatchingCountry =  function (input) {  
    const lowerInput = input.toLowerCase(); 
    
    // First, check for an exact match in keys
    const exactMatch = Object.keys(country_names).find(key => key.toLowerCase() === lowerInput);
    if (exactMatch) {
        return country_names[exactMatch];
    }
  
    // If no exact match in keys, split the input by "/" to handle multiple words
    const inputWords = lowerInput.split(' / ');
  
    // Iterate through the keys to find a match
    for (const key of Object.keys(country_names)) {
        const lowerKey = key.toLowerCase();
        const keyWords = lowerKey.split(' / ');
        const regex = new RegExp(key, 'i');
  
        // Check if any of the input words match any of the key words
        if (inputWords.some(inputWord => keyWords.includes(inputWord))  || regex.test(input)  && inputWords.some(inputWord => regex.test(inputWord))) {
            return country_names[key];
        }
    }
  
    const matchingValue = Object.keys(country_names).find(key => country_names[key].toLowerCase() === lowerInput);
    if (matchingValue) {
        return country_names[matchingValue]; 
    } 

     // If no match found in keys, try regex matching
     const regexMatch = Object.keys(country_names).find(key => {
        const regex = new RegExp(input, 'i'); // 'i' for case-insensitive matching 
        
        return regex.test(key);
    }); 

    if (regexMatch) {  
        
        return country_names[regexMatch]; 
    }

  
    return null; // No match found

  }

  module.exports = {
    findMatchingCountry,findMatchingIndustry,findMatchingMachineNames
  }
