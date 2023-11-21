const fs = require("fs");  
const axios = require('axios');
const machine_names = require('./data.js');
const industry_names = require('./industry.js'); 


async function printOutput(code){

    try{

    // const res = await axios.get(`https://api-prod.nvidia.com/services/eupservice/v2/attribute/${code}/industries`);

  //  const translations = res.data;
  //  const newObj = {};

  //  const outPrint = translations.forEach(element => {

  //       newObj[element.tagName] = element.machineName;
  //  });  
  const newObj = Object.values(industry_names); 
   console.log(newObj); 
   const filePath = 'output.json'; 

   fs.writeFileSync(filePath, JSON.stringify(newObj, null, 2)); // null and 2 for pretty-printing

   console.log('Data has been written to the file:', filePath);
 } catch (error) {
   console.error('Error:', error);
 }

     
} 

printOutput();      

