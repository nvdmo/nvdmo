const fs = require("fs");  
const axios = require('axios'); 
const FormData = require('form-data');


async function makeBulkRequest(bearer_token,fileInputPath,res){  

const myHeaders = {
  Authorization: `Bearer ${bearer_token}`, 
};

// const fileInputPath = `../downloads/${sheetName}`;  

fs.readFile(fileInputPath, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const formData = new FormData();
   // Create a Blob from the data and append it to formData
   formData.append("file", Buffer.from(data), { filename: "COOL.csv" }); 

  axios.post("https://375-HQO-044.mktorest.com/bulk/v1/leads.json?format=csv", formData, {
    headers: {
      ...myHeaders,
      ...formData.getHeaders(), // Include the necessary headers for FormData
    },
  })
    .then(response => {  
        console.log(response.data);

        res.status(201).json({
            success:true,
            message:response.data
        }); 
        // return response.data;  
    })
    .catch(error => {
        console.error('Error:', error);

        res.status(501).json({
            success:false,
            message:error
        });
        return error; 
    });
}); 

}




module.exports = makeBulkRequest; 