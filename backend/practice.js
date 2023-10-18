
const industry_names = require('./industry.js');
const machine_names = require('./data.js');
const country_names = require('./country.js');
const {spawn} = require('child_process');  



const userInput = "設計、エンジニアリング、建築";  

// const res = userInput.includes('建築');
// console.log(`answer ${res}`)


//function after adding the regex condition for matching the keys in industry_names

function findMatchingIndustry(input) {
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
        if (inputWords.some(inputWord => keyWords.includes(inputWord)) || regex.test(input)  || keyWords.some((key) => input.includes(key))){
        
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
        const regex = new RegExp(userInput, 'i'); // 'i' for case-insensitive matching
        
        return regex.test(key);
    });

    if (regexMatch) {  
        
        return industry_names[regexMatch];
    }

    return null; // No match found
}

// console.log(findMatchingIndustry(userInput));   


//for matching machine names 

function findMatchingMachineNames(input) {
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
        const regex = new RegExp(userInput, 'i'); // 'i' for case-insensitive matching
        
        return regex.test(key);
    }); 

    if (regexMatch) {  
        
        return machine_names[regexMatch];
    }
  
    return null; // No match found
  }


//   console.log(findMatchingMachineNames(userInput));


//function for findind matching countries  

function findMatchingCountry(input) {
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
        const regex = new RegExp(userInput, 'i'); // 'i' for case-insensitive matching
        
        return regex.test(key);
    }); 

    if (regexMatch) {  
        
        return country_names[regexMatch];
    }

  
    return null; // No match found
  }

//   console.log(findMatchingCountry(userInput));



function runPythonScript() {

    // spawn new child process to call the python script
  const python = spawn('python', ['script1.py']);
  
   // collect data from script
   python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...'); 
     console.log(data.toString());
    });
 
     // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
   console.log(`child process close all stdio with code ${code}`); 
  
   });
 }
 
//  runPythonScript();    
 



//Function for getting the Job Titles

function getJobTitles() {	
    var locale = $('html').attr('lang');
	if(locale==="en-zz" || locale==="en-il" || locale==="sb-ce" || locale==="he-il") {
		locale="en-us";
	}
	if(locale==="zh-cn"){
		NVIDIAGDC.apps.endpoint="https://api-prod.nvidia.com";
	}
    
    return new Promise((resolve, reject) => {
      $.ajax({
		url: NVIDIAGDC.apps.endpoint + "/services/eupservice/v2/attribute/"+locale+"/jobRoles",
		success: function(result){	
          resolve(result);
        },
        error: function(error) {
          reject(error);
        }
    });
  });
  }
  var selectjobTitle = $('.jobRole select');
  var event;
	if (typeof (Event) === 'function') {
		event = new Event('change');
	} else {
		event = document.createEvent('Event');
		event.initEvent('change', true, true);
	}
  getJobTitles().then((result)=>{
    $('.jobRole select option:not(:first)').remove();
      $.each(result, function(index,value){
        if(value.machineName === NVIDIAGDC.AdaptiveForm.jobRoleSelected){
         selectjobTitle.append($("<option/>").attr("value", value.machineName).attr("selected", true).text(value.tagName)); 
      } else {
         selectjobTitle.append($("<option/>").attr("value", value.machineName).text(value.tagName));
      }
        
      
        
      });
    selectjobTitle.selectmenu('refresh');
    $(selectjobTitle).get(0).dispatchEvent(event);
    }).catch((error) =>{
    	console.log("Error while getting jobRole options",error);  
        $('.jobRole select option:not(:first)').remove();
    	

  });