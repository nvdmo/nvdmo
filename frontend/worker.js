// worker.js
const requiredFields = ["*First Name", "*Last Name", "*Email Address", "*Company Name", "*Country"];

// Add the isValidEmail and isObjectValid functions here 

self.addEventListener('message', (event) => {
  const data = event.data; 
  const tableRows = data.tableRows;


  //Adding both function for checking email validity and object validity
  function isValidEmail(email) {
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;     
    return emailRegex.test(email);
  }
  function isObjectValid(obj, index) {
    const emptyFields = [];
    requiredFields.forEach(field => {
      if (field === "*Email Address") {
        if (!isValidEmail(obj[field])) {
          console.log(obj);
          emptyFieldsmsg.push(`Email Address not valid in Row number ${index + 1}`); 
        }
      } else if (obj[field] === undefined || obj[field] === "" || obj[field] === " " || obj[field] === null) {
        emptyFields.push(field);
      }
    });

    if (emptyFields.length > 0) {
      console.log(`Empty fields in row ${index + 1}: ${emptyFields.join(', ')}`);
      emptyFieldsmsg.push(`Empty fields in row ${index + 1}: ${emptyFields.join(', ')}`);
      //console.log(obj); // Log the entire object
      return false;
    }

    return true;

  }

  // Functions for checking duplicate emails ; 
  function checkDuplicateEmails(){
    const emailToRows = {};

    tableRows.forEach((person, index) => {
      const email = person["*Email Address"]; 
  
      if (!emailToRows[email]) {
          emailToRows[email] = [index + 1];
      } else {
          emailToRows[email].push(index + 1); 
      }

  });

  const duplicateEmails = Object.entries(emailToRows)
    .filter(([email, rowArray]) => rowArray.length > 1)
    .map(([email, rowArray]) => ({ email, rows: rowArray })); 
    
  return duplicateEmails; 

  }


  const emptyFieldsmsg = [];

  const objectsWithEmptyFields = tableRows.filter((obj, index) => {
    return !isObjectValid(obj, index);
  });

  // Checking for duplicate emails in the Data; 
  const duplicateEmailRows = checkDuplicateEmails(); 

  if(duplicateEmailRows.length > 0){ 
    duplicateEmailRows.forEach((item) => {  
      emptyFieldsmsg.push(`Email ${item.email} has duplicate on rows ${item.rows}`); 
    });
   }

  if (emptyFieldsmsg.length > 0) { 
    self.postMessage({ error: true, messages: emptyFieldsmsg });
  } else {
    self.postMessage({ error: false });
  }
 
});
