const express = require('express');
const app = express();
var cors = require('cors');
const multer = require('multer');
const fs = require("fs");
const path = require('path');
const { spawn } = require('child_process');
require("dotenv").config();
const PORT = 5000;

// Requiring the sheetJS module 
const reader = require('xlsx');

//importing all the utility functions 

const { findMatchingMachineNames,
  findMatchingIndustry,
  findMatchingCountry } = require('./utilityFunctions.js');

//importing marketo API functions 
const generateToken = require('./marketo_api_functions/generateToken.js');
const makeBulkRequest = require('./marketo_api_functions/makeBulkRequest.js');



// middlewares
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });




app.get('/', (req, res) => {
  res.send(`<h2>Server Running  ===></h2>`);
});

// uploading file to server

app.post('/upload/excel', upload.single('excel'), function (req, res) {

  // console.log(req.file.filename); 

  try {
    // Reading our sheet 
    const file = reader.readFile(`./uploads/${req.file.filename}`);

    let data = [];

    const sheets = file.SheetNames


    for (let i = 0; i < sheets.length; i++) {
      if (i === 0) {
        const temp = reader.utils.sheet_to_json(
          file.Sheets[file.SheetNames[i]], {
          header: 0,
          defval: ""
        });
        // console.log('temp sheet',temp);   
        temp.forEach((res) => {
          data.push(res);
        })
      }

    }
         


    //  iteration for changing exact machine values

    for (let i = 0; i < data.length; i++) {

      let displayName;

      if (data[i].hasOwnProperty("Job Role")) {
        displayName = data[i]["Job Role"] ? data[i]["Job Role"] : ""; 
        const userInputResult = findMatchingMachineNames(displayName);
        data[i]["Job Role"] = userInputResult;
        
      }

      if (data[i].hasOwnProperty("Job Title")) {
        displayName = data[i]["Job Title"] ? data[i]["Job Title"] : "";
        const userInputResult = findMatchingMachineNames(displayName);
        data[i]["Job Title"] = userInputResult;
        
      }

      let industryName = data[i]['Industry'] ? data[i]['Industry'] : "";
      let countryName = data[i]["*Country"] ? data[i]["*Country"] : "";
   
      const userInputResult = findMatchingIndustry(industryName);
      const countryInputResult = findMatchingCountry(countryName); 
      // console.log(userInputResult);
      data[i]['Industry'] = userInputResult; 
      data[i]["*Country"] = countryInputResult;
      


    }

    //  console.log(data);  


    //  writing changed names to new excel sheet 

    const ws = reader.utils.json_to_sheet(data);

    reader.utils.book_append_sheet(file, ws, `Sheet${sheets.length + 1}`);

    //  reader.writeFile(file,`./downloads/${req.file.filename}`);          

    res.status(201).json({ status: true, data: data,fileName:req.file.filename });

  } catch (error) {
    console.log(error);
    res.status(501).json({
      status: false,
      data: {}
    });

  }

});

app.post('/approved/data', async (req, res) => {
  let data = req.body.updatedTableData;
  console.log(data);
  let filename = req.body.fileName;
  let extractedFileName = '';
  // console.log(filename);

  const parts = filename.split('.');
if (parts.length > 1) {
  // If there's an extension, remove the last part (the extension) and join the remaining parts
  const fileNameWithoutExtension = parts.slice(0, -1).join('.');
  console.log(fileNameWithoutExtension);
  extractedFileName = fileNameWithoutExtension;
} else {
  // If there's no extension, use the original file name
  console.log(filename);

}

  // Changing the Key to desired key that marketo accepts 
  data = data.map((row) => {
    const { "*First Name": firstName, "*Last Name": lastName, "*Email Address": email, "*Company Name": contactCompany, "*Country": country, "Phone Number": phone, "Industry": industry, "Job Title": title,"B2B True":B2B__c,"Holding Field - Ent Topics":Holding_Field_Ent_Topics,"Holding Field - Ent Opt-In Source":Holding_Field_Ent_Opt_In_Source,"Holding Field - Dev Opt-In Source":Holding_Field_Dev_Opt_In_Source,"Holding Field - Dev Opt-In Sentence":Holding_Field_Dev_Opt_In_Sentence} = row;

    return {
      firstName, lastName, email, contactCompany, country, phone, title, industry,B2B__c,Holding_Field_Ent_Topics,Holding_Field_Ent_Opt_In_Source,Holding_Field_Dev_Opt_In_Source,Holding_Field_Dev_Opt_In_Sentence
    }

  });

  // console.log(data);  
  const ws = reader.utils.json_to_sheet(data); 
  const csv = reader.utils.sheet_to_csv(ws);
  // Writing the csv file to download folder   

  try {

    fs.writeFile(`./downloads/${extractedFileName}.csv`, csv, async (err) => { 
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data has been written to the file.');

        // First making token generation request to marketo

        const token = await generateToken(process.env.BASE_URL, process.env.CLIENT_ID, process.env.CLIENT_SECRET);

        // console.log(token.access_token);
        const pathForFile = path.join(__dirname, `/downloads/${extractedFileName}.csv`);  

        if (token.access_token) {
          const bulkImport = await makeBulkRequest(token.access_token, pathForFile,res);
          console.log(`Bulk Import ${bulkImport}`);        
          
        }

      } // end of writing file functionCLIENT_ID

    });

  } catch (error) {

    res.status(501).json({ 

      success: false,
      message: "error"

    }); 

  } 

});


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);  
});