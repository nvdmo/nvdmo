const industry_names = require('./industry.js');
const machine_names = require('./data.js');
const country_names = require('./country.js');

const userInput = "モバイルコンピューティング推進コンソーシアム";  


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

// function findMatchingIndustry(input) {
//     const lowerInput = input.toLowerCase().trim();

//     // First, check for an exact match in keys
//     const exactMatch = Object.keys(industry_names).find(key => key.toLowerCase() === lowerInput);
//     if (exactMatch) {
//         return industry_names[exactMatch];    
//     }

//     // If no exact match in keys, split the input by "/" or "&" to handle multiple words and separators
//     let inputWords = lowerInput.split(/[\/&]+/); // Use [\/&]+ to match either "/" or "&"
//           inputWords = inputWords.map((input) => input.trim()); 
//         //   console.log(inputWords)

//     // Iterate through the keys to find a match
//     for (const key of Object.keys(industry_names)) {
//         const lowerKey = key.toLowerCase();
//         let keyWords = lowerKey.split(/[\/&]+/); // Use [\/&]+ to match either "/" or "&"
//         keyWords = keyWords.map((key) =>  key.trim());
//         // console.log(`split keys ${keyWords}`);  

//         // Check if any of the input words match any of the key words
//         if (inputWords.some(inputWord => keyWords.includes(inputWord)) || keyWords.some((key) => input.includes(key))){ 
//                         return industry_names[key]; 
//                  }  
//     }

//     // Trying to find the match in values
//     const matchingValue = Object.keys(industry_names).find(key => industry_names[key].toLowerCase() === lowerInput);
//     if (matchingValue) {
//         return industry_names[matchingValue];
//     }

//     return input == null || input === undefined || input == "" ? input : `!${input}`;  // No match found 

// }



const findMatchingIndustry = function (input) {
  const lowerInput = input.toLowerCase();

  // First, check for an exact match in keys
  const exactMatch = Object.keys(industry_names).find(key => key.toLowerCase() === lowerInput);
  if (exactMatch) {
    return industry_names[exactMatch];
  }

  // If no exact match in keys, split the input by "/" to handle multiple words
  let inputWords = lowerInput.split(/[\/&]+/);
  inputWords = inputWords.map((input) => input.trim());
  // Iterate through the keys to find a match
  for (const key of Object.keys(industry_names)) {
    const lowerKey = key.toLowerCase();
    let keyWords = lowerKey.split(/[\/&]+/);
    keyWords = keyWords.map((key) => key.trim());
    const regex = new RegExp(key, 'i');

    // Check if any of the input words match any of the key words
    if (inputWords.some(inputWord => keyWords.includes(inputWord)) || regex.test(input) || keyWords.some((key) => input.includes(key))) {
      console.log('condition checked');
      return industry_names[key];
    }
  }

  //trying to find the match in values
  const matchingValue = Object.keys(industry_names).find(key => industry_names[key].toLowerCase() === lowerInput);
  if (matchingValue) {
    console.log('condition checked2');
    return industry_names[matchingValue];
  }

  // If no match found in keys, try regex matching 
  const regexMatch = Object.keys(industry_names).find(key => { 
    if (input !== "") { // Check that input is not empty
      const regex = new RegExp(input, 'i');
      return regex.test(key);
    }
    return false;
  });

  if (regexMatch) {

    return industry_names[regexMatch];
  }

  return input == null || input === undefined || input == "" ? input : `!${input}`; // No match found 
}



const result = findMatchingIndustry(userInput);
console.log(result);

// const fileName = "Q1FY24 APS DGX Campaign Leads_v6.xlsx";

// // Use the split method to split the string by the dot (.) to separate the file name and extension
// const parts = fileName.split('.');
// if (parts.length > 1) {
//   // If there's an extension, remove the last part (the extension) and join the remaining parts
//   const fileNameWithoutExtension = parts.slice(0, -1).join('.');
//   console.log(fileNameWithoutExtension);
// } else {
//   // If there's no extension, use the original file name
//   console.log(fileName);
// }