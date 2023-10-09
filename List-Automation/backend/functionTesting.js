const industry_names = require('./industry.js');
const machine_names = require('./data.js');
const country_names = require('./country.js'); 

const userInput = "automovtive";    


// function findMatchingIndustry(input) { 
//     const lowerInput = input.toLowerCase();
    
//     // First, check for an exact match in keys
//     const exactMatch = Object.keys(industry_names).find(key => key.toLowerCase() === lowerInput);
//     if (exactMatch) {
//         return industry_names[exactMatch];    
//     }

//     // If no exact match in keys, split the input by "/" to handle multiple words
//     const inputWords = lowerInput.split(' / ');

//     // Iterate through the keys to find a match
//     for (const key of Object.keys(industry_names)) { 
//         const lowerKey = key.toLowerCase();
//         const keyWords = lowerKey.split(' / ');
//         // const regex = new RegExp(key, 'i');

//         // Check if any of the input words match any of the key words
//         if (inputWords.some(inputWord => keyWords.includes(inputWord)) || keyWords.some((key) => input.includes(key))){
//             return industry_names[key]; 
//         }
//     }


//     //trying to find the match in values
//     const matchingValue = Object.keys(industry_names).find(key => industry_names[key].toLowerCase() === lowerInput);
//     if (matchingValue) {
//         return industry_names[matchingValue];
//     }  

//     return "not present"; // No match found
// }

function findMatchingIndustry(input) {
    const lowerInput = input.toLowerCase().trim();
    
    // First, check for an exact match in keys
    const exactMatch = Object.keys(industry_names).find(key => key.toLowerCase() === lowerInput);
    if (exactMatch) {
        return industry_names[exactMatch];    
    }

    // If no exact match in keys, split the input by "/" or "&" to handle multiple words and separators
    const inputWords = lowerInput.split(/[\/&]+/); // Use [\/&]+ to match either "/" or "&"
    // console.log(inputWords);

    // Iterate through the keys to find a match
    for (const key of Object.keys(industry_names)) {
        const lowerKey = key.toLowerCase();
        let keyWords = lowerKey.split(/[\/&]+/); // Use [\/&]+ to match either "/" or "&"
        keyWords = keyWords.map((key) =>  key.trim());
        // console.log(keyWords);  

        // Check if any of the input words match any of the key words
        if (inputWords.some(inputWord => keyWords.includes(inputWord)) || keyWords.some((key) => input.includes(key))){
                        return industry_names[key]; 
                 }  
    }

    // Trying to find the match in values
    const matchingValue = Object.keys(industry_names).find(key => industry_names[key].toLowerCase() === lowerInput);
    if (matchingValue) {
        return industry_names[matchingValue];
    }

    return `<span class="red-text">${input}</span>`; // No match found 
    
}



const result = findMatchingIndustry(userInput);   
console.log(result);  