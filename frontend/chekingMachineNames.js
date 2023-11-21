

self.addEventListener('message', (event) => { 

    const allRowsData = event.data.tableRows;                    
    let errorMessages = [];

    allRowsData.forEach((row,index) => {

        const allIndustryValues = row["Industry"];
        const allJobRoleValues = row["Job Title"] || row["Job Role"];
       

        if(allIndustryValues.startsWith("!")){
            errorMessages.push(`Industry Value ${allIndustryValues} on Row No ${index + 1} is not Valid`); 
        } 

        if((allJobRoleValues !== undefined && allJobRoleValues !== null && allJobRoleValues && "") && allJobRoleValues.startsWith("!")){
            
            errorMessages.push(`Job Role ${allJobRoleValues} on Row No ${index + 1} is not Valid`);
        }
    

    });  // Loop Ends 

    if (errorMessages.length > 0) {
        self.postMessage({ error: true, messages: errorMessages });
      } else {
        self.postMessage({ error: false,messages:[] }); 
      }

});