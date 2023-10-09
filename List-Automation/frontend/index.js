
const file = document.getElementById('input-file');
const showName = document.querySelector('.file-name');
const label = document.getElementById('input-label');
const reset = document.getElementById('input-reset');
const buttonGroup = document.querySelector('.buttons-group');
const container = document.querySelector('.container');
let container1 = document.getElementById("container1");
const DownloadBtnContainer = document.querySelector('.download-button-container');
const downloadBtn = document.getElementById('download');
const deleteSelection = document.getElementById("delete-rows");
   
const proceedButton = document.getElementById('input-button'); 
let selectedFile;
let tableData;
let documentApproval = false;
let table;  
var alertMessage = document.querySelector('.alert-danger');
const successMessage = document.querySelector('.alert-success');

// Seleting elements of the Loader 
const loaderContainer = document.querySelector(".loader_container"); 
// const loader = document.querySelector("#loader");
const loaderTextBelow = document.querySelector("#loader_text");

//defining the array containing table columns to be removed ;

let columnsToDelete = []; 




let formData = new FormData();


window.addEventListener('DOMContentLoaded', () => {
  buttonGroup.style.display = 'none'
  container1.style.display = 'none'
  DownloadBtnContainer.style.display = "none";

  //setting selection button attribute to be disabled
  // deleteSelection.setAttribute("disabled","");

}); 

file.addEventListener('change', () => {
  selectedFile = file.files[0].name

  if (file.files.length > 0) {
    label.style.display = 'none';
    buttonGroup.style.display = 'block'
  }
  showName.innerText = file.files[0].name;
  formData.append("excel", file.files[0]);

})

reset.addEventListener('click', () => {
  location.reload();
})


// function to send file using fetch

async function upload(formData) {
  try {
    const response = await fetch("http://localhost:5000/upload/excel/", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    // console.log(result.data)

    if (result.status === true) {
      label.style.display = 'none';
      buttonGroup.style.display = 'none'
      showName.innerText = "Parsing Completed"

      const button = document.createElement('button');
      button.id = "input-download";
      button.innerText = `show excel`;
      container.appendChild(button);
      const downloadButton = document.querySelector('#input-download');
      downloadButton.addEventListener('click', () => downloadfn(result.data));
      console.log(result.data);


    } else {
      label.style.display = 'none';
      buttonGroup.style.display = 'none'
      showName.innerText = "There was an issue in parsing this file"
    }
  } catch (error) {
    console.error("Error:", error);
  }

}


proceedButton.addEventListener('click', async () => {
  console.log(formData);
  upload(formData);

});




function downloadfn(jsonData) {


  container.style.display = "none";
  container1.style.display = "block";
  document.body.style.backgroundColor = "#fff";
  document.body.style.display = "block";
  DownloadBtnContainer.style.display = "block";
  convert(jsonData);

}



//TABLE END 
// Function to turn Json data to Table format 
// function convert(jsonData) {

//   // Get the container element where the table will be inserted
//   let container = document.getElementById("container1");

//   // Create the table element

//   table.id = "excel-table";

//   // Get the keys (column names) of the first object in the JSON data
//   let cols = Object.keys(jsonData[0]);

//   // Create the header element
//   let thead = document.createElement("thead");
//   let tr = document.createElement("tr");

//   // Loop through the column names and create header cells
//   cols.forEach((item, index) => {
//     let th = document.createElement("th");
//     if (item.includes('EMPTY')) {
//       return;
//     }
//     th.innerText = item;
//     // Set the column name as the text of the header cell
//     tr.appendChild(th); // Append the header cell to the header row
//   });
//   // appending the action column
//   let th = document.createElement("th");
//   th.innerText = "Action";
//   th.classList.add('sometimesHidden');
//   th.contentEditable = "false";
//   console.log('This is a', $(this).find('table'));
//   tr.insertBefore(th, tr.firstChild);
//   // added the action column to the row
//   thead.appendChild(tr); // Append the header row to the header
//   table.append(tr) // Append the header to the table

//   // Loop through the JSON data and create table rows
//   jsonData.forEach((item, index) => {
//     let tr = document.createElement("tr");
//     //  let deleteBtn = document.createElement('button');
//     //     deleteBtn.class = index;
//     //     deleteBtn.innerText = "Delete Row";
//     //     tr.append(deleteBtn);

//     // Get the values of the current object in the JSON data
//     let vals = Object.values(item);

//     // Loop through the values and create table cells
//     vals.forEach((elem, index) => {
//       let td = document.createElement("td");
//       td.setAttribute('data-toggle', "popover");


//       td.innerText = elem; // Set the value as the text of the table cell

//       tr.appendChild(td); // Append the table cell to the table row
//     });
//     let td = document.createElement("td");
//     let deleteButton = document.createElement('button');
//     let editButton = document.createElement('button');
//     let confirmButton = document.createElement('button');
//     deleteButton.id = `${index}`;
//     deleteButton.classList.add('delete-row');
//     editButton.classList.add('edit-row');
//     confirmButton.classList.add('confirm-row');
//     deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
//     editButton.innerHTML = `<i class="far fa-edit"></i>`;
//     confirmButton.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
//     deleteButton.addEventListener('click', removeRow);
//     editButton.addEventListener('click',editRow);
//     confirmButton.addEventListener('click',confirmRow);
//     confirmButton.style.display = "none";  // hiding the confirm button for edit and confirm feature
//     td.appendChild(deleteButton);
//     td.appendChild(editButton);
//     td.appendChild(confirmButton);
//     td.classList.add('sometimesHidden');
//     td.contentEditable = "false"
//     tr.insertBefore(td, tr.firstChild); 
//     table.appendChild(tr); // Append the table row to the table 

//   });

//   container.appendChild(table) // Append the table to the container element 

// }

//TABLE END 
var tableEditable = false; 
function convert(jsonData) {    // Convert functions START 



  const headers = Object.keys(jsonData[0]);

  function editCheck() {
    if (tableEditable === true) {
      return true;
    } else {
      return false;
    }
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const newColumnHeaders = headers.map((head) => {


    var headerContextMenu = [  
      {
        label: "Delete Column",
        action: function (e, column) {
         const cannotDelete = ["*First Name", "*Last Name", "*Email Address", "*Company Name", "*Country"]; 
        //  console.log(column.getField());    
         if(cannotDelete.some((field) => field === column.getField())){ 
            showToast("Cannot delete an important field!!!"," linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)"); 
            return; 
         }else if(tableEditable === false){
            showToast("Please click modify to delete Column OR Row"," linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
            return; 
         } 
         
          column.delete(); 
         let deletedColumn = column.getField();
         columnsToDelete.push(deletedColumn);      
        }
      },

    ]

    if (head === '*First Name') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: validateCellData,
        headerContextMenu: headerContextMenu,
      }

    }
    if (head === '*Last Name') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: validateCellData,
        headerContextMenu: headerContextMenu,
      }
    }

    if (head === '*Email Address') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: cellDataValidate,
        headerContextMenu: headerContextMenu,
      }

    }

    if (head === '*Company Name') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: validateCellData,
        headerContextMenu: headerContextMenu,
      }

    }

    if (head === '*Country') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: validateCellData,
        headerContextMenu: headerContextMenu, 
      }

    }

    if (head === 'Industry') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: validateIndustryCell,
        headerContextMenu: headerContextMenu, 
      }

    }


    return {
      title: head,
      field: head,
      hozAlign: "left",
      editor: "input",
      editable: editCheck,
      formatter: importantFieldFormatter, 
      headerContextMenu: headerContextMenu,
    }

  }).filter((item) => {
    if (item.title.includes('EMPTY') || item.field.includes('EMPTY')) {
      return false;
    }
    return true;
  });

  // adding a collumn for row infornt of the table

  newColumnHeaders.unshift({ title: "Row NO.", field : "Row Number", formatter: "rownum", hozAlign: "left", width: 40});



  //Validating Industry cell but he cell can remain Empty

  function validateIndustryCell(cell){ 
    cell.getElement().classList.remove('bg-danger');
  }

  //Cell Data Validate 

  function cellDataValidate(cell) {

    console.log(`cell edition function working.....`);

    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    let value = cell.getValue();

    if (emailRegex.test(value) && (value !== undefined || value !== null || value !== " ")) {
      console.log(cell.getElement().classList.remove('bg-danger'));
      return true;
    } else {
      console.log(cell.getElement().classList.add('bg-danger'));
      table.alert('Please enter Valid Email Address...', 'error');
      let T1 = setTimeout(() => {
        table.clearAlert();
      }, 1500);
      setTimeout(() => {
        clearTimeout(T1);
      }, 1800)
      return false;
    }

  }

  // function Validation of cell 

  function validateCellData(cell) {
    let value = cell.getValue();
    if (value === undefined || value === null || value === "" || value === " ") {
      console.log(cell.getElement().classList.add('bg-danger'));
      table.alert('Value of this field cannot be empty!!!', 'msg');
      setTimeout(() => {
        table.clearAlert();
      }, 1500)
      return true;
    } else {
      cell.getElement().classList.remove('bg-danger');
      return false;
    }

  }


  // validator function to check table data 

  function cellDataCheck(cell, value, parameters) {
    console.log('Cell data check function...');
    if (value === undefined || value === null || value === " ") {
      // Apply custom styling to highlight the empty field
      console.log('value is empty..')
      console.log(cell.getElement().classList.add('bg-danger'));
      // table.alert('Cell Value cannot be empty...'); 
      // setTimeout(() => {
      //   table.clearAlert();  
      // },1500)
      return false;
    } else {
      console.log(cell.getElement().classList.remove('bg-danger'));
      return true;
    }

  }

  //checking important fields in cell
  function importantFieldFormatter(cell, formatterParams, onRendered) { 
    let value = cell.getValue();
    
    // console.log(cell.getColumn().getField()); 
    
    if(cell.getColumn().getField() === "*Email Address"){ 
      // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
      if(!emailRegex.test(value)){ 
        cell.getElement().classList.add('bg-danger');  
      } 

    }
    // condition for making the first name and last name sentence case
    if(cell.getColumn().getField() === "*First Name" && value !== undefined && value !== null && value !== ""){   
      let sentenceCase = toSentenceCase(value);
      return sentenceCase;
    } 
    if(cell.getColumn().getField() === "*Last Name" && value !== undefined && value !== null && value !== ""){ 
      let sentenceCase = toSentenceCase(value); 
      return sentenceCase;
    } 

    //Checking for the industry field whether value is valid or not  

    if(cell.getColumn().getField() === "Industry" && value !== undefined && value !== null && value !== ""){  
      const cellWithError = value.startsWith("!");
      // console.log(cellWithError)
      if(cellWithError){
        cell.getElement().classList.add('bg-danger');
      } 
    }
   
    if (value === undefined || value === null || value === "") {
      // Apply custom styling to highlight the empty field
      console.log(cell.getElement().classList.add('bg-danger'));
      return value;
    }
    return value;
  }

  // For making the string senetence case 

  function toSentenceCase(inputString) {

    // Convert the entire string to lowercase
    const lowercaseString = inputString.toLowerCase();
    
    // Capitalize the first letter
    const sentenceCaseString = lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
    
    return sentenceCaseString;

  } 

  //create Tabulator on DOM element with id "example-table"  
 table = new Tabulator("#container1", {   
    history:false,  
    maxHeight: "100%", 
    rowHeight: 40,
    selectable:false,
    printRowRange:"selected", 
    validationMode: "blocking",                  
    selectablePersistence: false, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: jsonData, //assign data to table
    layout: "fitDataFill", //fit columns to width of table (optional)
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [10, 15, 20],
    movableColumns: true,
    paginationCounter: "rows",
    columns: newColumnHeaders,
    selectableCheck: function (row) { 
      //row - row component
      // console.log('This is the row data', row.getData()); 
      return row.getData(); //allow selection of rows where the age is greater than 18
    },
    rowContextMenu: [
      {
        label: "Delete Row",
        action: function (e, row) {
          if(tableEditable === false){
            showToast("Please click on modify to edit or Delete"," linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
          } else{
            row.delete(); 
          }
          
        }
      },
    ],
  });

  //Method to make changes on Row Selection
  
  let selectedRows;

  table.on("rowSelectionChanged", function(data, rows){
    console.log(data.length);
    // console.log(data)

    selectedRows = data;

    if(data.length > 0){
      // deleteSelection.removeAttribute("disabled",""); 
    }
    
    
  }); 
  

  //Below function is for multiple row deletion _____;

  // deleteSelection.addEventListener("click",() => {
  //   deleteSelectedRows();
  // })

  function deleteSelectedRows() { 
    // Get selected rows' data
    var selectedData = table.getRows("selected");
    console.log(selectedData)

    selectedData.forEach((row) => {
      row.delete();
    })

    // console.log(selectedData)
  
    // Iterate through selected rows and remove them from the table
    selectedData.forEach(function (rowData) {
      var index = table.getData().indexOf(rowData);
      if (index !== -1) {
        tableData.pop(table.getData()[index]);
      }
    });
  }

} // Convert function ENDS and data shown in frontend with the Tabulator library 




//selecting modify button 
const modify = document.getElementById('modify');
const approve = document.querySelector('#approve');
let editRowOption = false;

// modify.addEventListener('click', () => { 

//   let deleteRowOption = document.querySelectorAll('.sometimesHidden');


//   if (documentApproval) {
//     console.log('document is already approved');
//     alertMessage.innerText = "Document is Approved,cannot edit";
//     alertMessage.style.display = "block";
//     alertMessage.style.zIndex = "1";
//     setTimeout(() => {
//       alertMessage.style.display = "none";
//     }, 2000);

//     return;
//   }


//   if(editRowOption === false){ 
//     editRowOption = true;
//     deleteRowOption.forEach((item) => {
//       item.style.display = "block"
//     });

//     table.style.background = '#999999'
//     table.style.border = "2px dotted #cccccc"

//     modify.innerText = "Done";
//   }else{
//     editRowOption = false; 
//     deleteRowOption.forEach((item) => {
//       item.style.display = "none"
//     });
//     table.style.background = '#ffffff'
//     table.style.border = ""
//     modify.innerText = "Modify";
//   }


// });

modify.addEventListener('click', () => {
  if (tableEditable === false) {
    tableEditable = true;
    modify.innerText = "Disable Editing";
    showToast("Editing Mode On!!","#76b900");
  } else {
    tableEditable = false;
    modify.innerText = "Enable Editing"; 
    showToast("Edit Complete!!Data Saved","#76b900");  
  }
})


// downloadBtn.addEventListener('click', () => {

//   // with sheet JS
//   if (editRowOption === true) {
//     console.log(editRowOption);
//     alertMessage.innerText = `The table is still on edit.Mark it done to proceed download`;
//     alertMessage.style.display = "block";
//     alertMessage.style.zIndex = "1";

//     setTimeout(() => {
//       alertMessage.style.display = "none";
//       alertMessage.style.zIndex = "-1";

//     }, 2000);

//   } else {
//     console.log(editRowOption);
//     const ExportedtoCSV = ExportToExcel('csv');
//     console.log("eXPORTED TO CSV", ExportedtoCSV); 
//   }

// });


downloadBtn.addEventListener('click',() => { 

    if(tableEditable === true){

        showToast('Table is still on edit mode !! Click done if complete editing'); 

    }else{

      console.log('download the data...!'); 
      table.download("csv", "data.csv", {delimiter:","}); 

    } 

})


//   function ExportToExcel(type, fn, dl) { 
//     var elt = document.getElementById('excel-table');
//     var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
//    console.log('workbook',wb.Sheets
//    )

//     return dl ?
//         XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) : 
//         XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
// }



// function ExportToExcel(type, fn, dl) {
//   var elt = document.getElementById('excel-table'); 

  // Exclude the first column from the table
  // var excludedColumnIndex = 0; // Change this to the index of the column you want to exclude
  // var tableClone = elt.cloneNode(true);
  // var rows = tableClone.getElementsByTagName('tr');
  // console.log(rows);

  // for (var i = 0; i < rows.length; i++) {
  //   var cells = rows[i].getElementsByTagName('td');
  //   var cells1 = rows[i].getElementsByTagName('th');


  //   if (rows[i].getElementsByTagName('th')) {
  //     if (cells1.length > excludedColumnIndex) {
  //       rows[i].removeChild(cells1[excludedColumnIndex]);
  //     }
  //   }

  //   if (cells.length > excludedColumnIndex) {
  //     rows[i].removeChild(cells[excludedColumnIndex]);
  //   }
  // }

  // // Create a CSV string from the table data
  // var csv = '';
  // for (var i = 0; i < rows.length; i++) {
  //   var cells = rows[i].getElementsByTagName('td');
  //   for (var j = 0; j < cells.length; j++) {
  //     csv += cells[j].innerText + (j < cells.length - 1 ? ',' : '');
  //   }
  //   csv += '\n';
  // }

  // Create a data URI for the CSV data
  // var csvDataUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);

  // Now, you can use this data URI for Marketo's Bulk API import
  //  console.log(csvDataUri);
  // const decodedCSV = decodeURIComponent(csvDataUri);
  // const csvToJson = JSON.stringify(decodedCSV.toString());
  // console.log(csvToJson);

  //for downloading the file
//   var wb = XLSX.utils.table_to_book(, { sheet: "sheet1" });
//   // console.log(wb);

//   return dl ?
//     XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
//     XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
// }





function Convert() {
  var table = document.getElementById("excel-table");
  var header = [];
  var rows = [];

  for (var i = 0; i < table.rows[0].cells.length; i++) { 
    header.push(table.rows[0].cells[i].innerHTML);
  }

  for (var i = 1; i < table.rows.length; i++) {
    var row = {};
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      row[header[j]] = table.rows[i].cells[j].innerHTML;
    }
    rows.push(row);
  }

  return rows;
}



// removing row function
function removeRow(e) {
  // console.log('button id',e.target.id);
  const currentButton = e.target.closest('tr');
  console.log(currentButton.remove());


}

// edit Row function
function editRow(e) {
  const currentRow = e.target.closest('tr');
  const allTd = currentRow.querySelectorAll('td');
  const confirmButton = currentRow.querySelector('.confirm-row');
  const currentEditButton = currentRow.querySelector('.edit-row');

  allTd.forEach((item, index) => {
    if (index === 0) {
      return;
    }
    item.contentEditable = 'true';
  });
  currentRow.style.background = "#ffffff";
  currentEditButton.style.display = 'none';
  confirmButton.style.display = 'inline-block';
}

//confirm row Button 
function confirmRow(e) {
  const currentRow = e.target.closest('tr');
  const allTd = currentRow.querySelectorAll('td');
  const editButton = currentRow.querySelector('.edit-row');
  const currentConfirmButton = currentRow.querySelector('.confirm-row');

  allTd.forEach((item) => {
    item.contentEditable = 'false';
  });

  currentConfirmButton.style.display = 'none';
  editButton.style.display = 'inline-block';
  currentRow.style.background = ''; // Reset background color

} 



approve.addEventListener('click', async() => { 
    // console.log(columnsToDelete);   

  let tableRows = table.getData();    

  // console.log(tableRows); 

  if(tableEditable === true){
    showToast('Table still on edit mode click done to approve the changes !!!'," linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");

    }else{

      //Run the code to check for the changes

       //creating a web worker
    const worker = new Worker('worker.js'); 

    worker.addEventListener('message', async(event) => {
      const errorMessage = [];
      if (event.data.error) {
        // Handle errors and display toast messages
        event.data.messages.forEach((message) => {     
          errorMessage.push(message);
        });
        if(errorMessage.length < 10){
          errorMessage.forEach((msg) => showToast(msg,"linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)"));
          
        }
        if(errorMessage.length > 50){
          showToast('too many error messages, error cells are marked in RED!!', "linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)"); 
        }

        

      } else {

        // Sending data if no Error START

        const industryNameCheck = await checkIndustryData();

        if(industryNameCheck.length > 0){
            industryNameCheck.forEach((msg) => showToast(msg, "linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)"));
        }else{
  
        if(documentApproval === false){
          documentApproval = true;     
        showToast('Document has been approved'); 

        //Code below will take the JSON data back to node js to push into marketo

        tableRows = tableRows.map((row) => {
          columnsToDelete.forEach((key) => {
            delete row[key];
          });
          return row;
        }); 

        console.log(tableRows); 

        //Code for sending the data to backend Node js 

          const result = await sendJsonToMarketo(tableRows); 
          console.log(result.message.result[0].status);
          if(result.message.result[0].status === "Queued"){
            container1.style.display = "none";
            loaderContainer.style.display = "block";
            loaderTextBelow.innerText = "Your document is being processed !!And sent to marketo"
            DownloadBtnContainer.style.display = "none";  

                  // Hiding the  table and showing the Loader
                  // container1.style.display = "none";
                  // loaderContainer.style.display = "block";
                  // DownloadBtnContainer.style.display = "none"; 
          }else{

            showToast("Error Occured while Uploading the data to marketo!!"," linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
          }

        }else{
          showToast("Document has already been approved!!!","#76b900");  
        }
        // sending data if no error END

      }

      }

      worker.terminate(); 

    });

    worker.postMessage({ tableRows });  

    }
  

});

//funtion to send Json to the backend Node JS

  async function sendJsonToMarketo(updatedTableData){ 

    console.log('tabelrows in senJson');

    const res = await fetch('http://localhost:5000/approved/data',{ 
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(updatedTableData),    
    });

    const data = await res.json();
    return data;

  }



function showToast(message,colour) { 

  Toastify({
    text: `${message}`,
    className:"tabulator-selected",
    duration: 5000,  
    destination: "",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: colour,
      color:"#000",
      fontWeight:"bold",
    },
    onClick: function () { } // Callback after click
  }).showToast();

}

//function for checking data in Industry column

async function checkIndustryData(){

  const errorCells = [];
  table.getColumns().forEach((col) => {
    const field = col.getField();
 
    if(field === "Industry"){
     const cells = col.getCells();
     cells.forEach((cell) =>  {
       
       if(cell.getElement().classList.contains("bg-danger")){ 
         const row = cell.getRow();
         // console.log(row.getPosition())

         errorCells.push(`Value ${cell.getValue()} Row no. ${row.getPosition()} is not Valid`);
        
       }
     });
    }
 
   });

   return errorCells;
   
}


