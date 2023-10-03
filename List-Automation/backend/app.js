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
const { Console } = require('console');


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

    // Printing data
    // console.log(data); 
    // fs.writeFileSync('output.json', JSON.stringify(data, null, 2));           


    //  iteration for changing exact machine values

    for (let i = 0; i < data.length; i++) {

      let displayName;

      if (data[i].hasOwnProperty("Job Role")) {
        displayName = data[i]["Job Role"] ? data[i]["Job Role"] : "not provided";
        const userInputResult = findMatchingMachineNames(displayName);
        data[i]["Job Role"] = userInputResult;
        // data[i]["Job Role"] = machine_names[displayName] ? machine_names[displayName] : displayName; 
      }

      if (data[i].hasOwnProperty("Job Title")) {
        displayName = data[i]["Job Title"] ? data[i]["Job Title"] : "not provided";
        const userInputResult = findMatchingMachineNames(displayName);
        data[i]["Job Title"] = userInputResult;
        // data[i]["Job Title"] = machine_names[displayName] ? machine_names[displayName] : displayName;
      }

      let industryName = data[i]['Industry'] ? data[i]['Industry'] : "not provided";
      let countryName = data[i]["*Country"] ? data[i]["*Country"] : "not provided";
      // countryName = countryName.toLowerCase(); 
      // console.log(industryName);
      // console.log(countryName);
      //  data[i]["Job Role"]  = machine_names[displayName] ? machine_names[displayName] : displayName;
      const userInputResult = findMatchingIndustry(industryName);
      const countryInputResult = findMatchingCountry(countryName);
      // console.log(userInputResult);
      data[i]['Industry'] = userInputResult;
      // data[i]['Industry'] = industry_names[industryName] ? industry_names[industryName] : industryValues.includes(industryName) ? industryName : "";
      data[i]["*Country"] = countryInputResult;
      // data[i]["*Country"] = lowercaseObject[countryName] ? lowercaseObject[countryName] : "";


    }

    //  console.log(data);  


    //  writing changed names to new excel sheet 

    const ws = reader.utils.json_to_sheet(data);

    reader.utils.book_append_sheet(file, ws, `Sheet${sheets.length + 1}`);

    //  reader.writeFile(file,`./downloads/${req.file.filename}`);          

    res.status(201).json({ status: true, data: data });

  } catch (error) {
    console.log(error);
    res.status(501).json({
      status: false,
      data: {}
    });

  }

});

app.post('/approved/data', async (req, res) => {
  let data = req.body; 

  // Changing the Key to desired key that marketo accepts 
  data = data.map((row) => {
    const { "*First Name": firstName, "*Last Name": lastName, "*Email Address": email, "*Company Name": contactCompany, "*Country": country, "Phone Number": phone, "Industry": industry,"Job Title":title, ...rest } = row; 

    return {
      firstName,lastName,email,contactCompany,country,phone,title,industry,...rest 
    }

  });

  console.log(data);
  const ws = reader.utils.json_to_sheet(data);
  const csv = reader.utils.sheet_to_csv(ws);
  // Writing the csv file to download folder  
  fs.writeFile('./downloads/COOL.csv', csv, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data has been written to the file.');
    }
  }); 


  console.log('approves API hit');

  //  console.log(data);   

  res.json({
    success: true,
    message: "DATA received in backend" 
  });

})

// async function makeRequest(){
// const res =  await  generateToken(process.env.BASE_URL,process.env.CLIENT_ID,process.env.CLIENT_SECRET);

// console.log(res.access_token); 
// }







app.listen(PORT, () => {
  console.log(`server is listening on port ${5000}`);
});