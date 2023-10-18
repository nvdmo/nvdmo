
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
const loader = document.querySelector("#loader");
const loaderTextBelow = document.querySelector("#loader_text");

//defining the array containing table columns to be removed ;

let columnsToDelete = []; 
let currentWorkingFile;




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

deleteSelection.addEventListener("click",() => { 
  console.log('scroll to button clicked');
  table.setPage(Number(6)); 

})


// function to send file using fetch

async function upload(formData) {
  try {
    const response = await fetch("http://localhost:5000/upload/excel/", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    // console.log(result)
    currentWorkingFile = result.fileName;

    if (result.status === true) {
      label.style.display = 'none';
      buttonGroup.style.display = 'none'
      showName.innerText = "Parsing Completed"

      //Hiding the loader
      loaderContainer.style.visibility = "hidden";
      loader.style.display = "none"
      loaderTextBelow.innerText = "Please Wait"; 

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
       //Hiding the loader
       loaderContainer.style.visibility = "hidden";
       loader.style.display = "none"
       loaderTextBelow.innerText = "Error"
    }
  } catch (error) {
    console.error("Error:", error);
  }

}


proceedButton.addEventListener('click', async () => {
  // console.log(formData);
  upload(formData);
loaderContainer.style.visibility = "visible"; 
// loader.style.display = "block"
loaderTextBelow.innerText = "Please Wait"
});




function downloadfn(jsonData) {


  container.style.display = "none";
  container1.style.display = "block";
  document.body.style.backgroundColor = "#fff";
  document.body.style.display = "block";
  DownloadBtnContainer.style.display = "block";
  convert(jsonData);

}

var tableEditable = false;
// var rowNumber = 0;
function convert(jsonData) {    // Convert functions START 

  const headers = Object.keys(jsonData[0]);

  function editCheck() {
    if (tableEditable === true) {
      return true;
    } else {
      return false;
    }

  }

  // Checking for important headers they should be present in the Excel
  const importantHeaders = ["*First Name", "*Last Name", "*Email Address", "*Company Name", "*Country"];
  const checkCorrectHeaders = importantHeaders.some((head) => !headers.includes(head)); 


  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
  const newColumnHeaders = checkCorrectHeaders ? (() => {
    // Code to run if the condition is true
    showToast("Headers are Invalid Pleae Check Your File","linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)") 
    DownloadBtnContainer.style.display = "none";
  })() : headers.map((head) => {

    var headerContextMenu = [
      {
        label: "Delete Column",
        action: function (e, column) {
          const cannotDelete = ["*First Name", "*Last Name", "*Email Address", "*Company Name", "*Country"];
          //  console.log(column.getField());    
          if (cannotDelete.some((field) => field === column.getField())) {
            showToast("Cannot delete an important field!!!", " linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
            return;
          } else if (tableEditable === false) {
            showToast("Please click on 'Enable Edit' to edit or Delete", " linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
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

    if (head === 'Job Title' || head === 'Job Role') {
      return {
        title: head,
        field: head,
        hozAlign: "left",
        editor: "input",
        editable: editCheck,
        formatter: importantFieldFormatter,
        cellEdited: validateJobCell, 
        headerContextMenu: headerContextMenu, 
      }

    }


    return {
      title: head,
      field: head,
      hozAlign: "left",
      editor: "input",
      editable: editCheck,
      headerContextMenu: headerContextMenu,
    }

  }).filter((item) => {
    if (item.title.includes('EMPTY') || item.field.includes('EMPTY')) {
      return false;
    }
    return true;
  });


  //Validating Industry cell but he cell can remain Empty

  function validateIndustryCell(cell) {
    cell.getElement().classList.remove('bg-danger');
    return false; 
    
  }

  //Validating Job Role/Job Title 

  function validateJobCell(cell){ 
    cell.getElement().classList.remove('bg-danger');
    return false;  
  }

  //Cell Data Validate 

  function cellDataValidate(cell) {

    // console.log(`cell edition function working.....`);

    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/; 
    let value = cell.getValue();

    if (emailRegex.test(value) && (value !== undefined || value !== null || value !== " ")) { 
      cell.getElement().classList.remove('bg-danger')
      return true;
    } else {
      cell.getElement().classList.add('bg-danger')
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
      cell.getElement().classList.add('bg-danger')
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
    // console.log('Cell data check function...'); 
    if (value === undefined || value === null || value === " ") {
      // Apply custom styling to highlight the empty field
      cell.getElement().classList.add('bg-danger');
     
      return false;
    } else {
      cell.getElement().classList.remove('bg-danger');
      return true;
    }

  }

  //checking important fields in cell
  function importantFieldFormatter(cell, formatterParams, onRendered) {
    let value = cell.getValue();

    // console.log(cell.getColumn().getField()); 

    if (cell.getColumn().getField() === "*Email Address") {
      // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

      if (!emailRegex.test(value)) {
        // console.log('email invalid', value);
        console.log(cell.getElement().classList.add('bg-danger'));
        return value;
      }
      // console.log('email valid')
      cell.getElement().classList.remove('bg-danger');
    }
    // condition for making the first name and last name sentence case
    if (cell.getColumn().getField() === "*First Name" && value !== undefined && value !== null && value !== "") { 
      let sentenceCase = toSentenceCase(value);
      return sentenceCase;
    }
    if (cell.getColumn().getField() === "*Last Name" && value !== undefined && value !== null && value !== "") {
      let sentenceCase = toSentenceCase(value);
      return sentenceCase;
    }

    //Checking for the industry field whether value is valid or not  

    if (cell.getColumn().getField() === "Industry" && value !== undefined && value !== null && value !== "") {
      const cellWithError = value.startsWith("!");
      // console.log(cellWithError)
      if (cellWithError) {
        cell.getElement().classList.add('bg-danger');
        return value;
      }
      return value;  

    }

    if (cell.getColumn().getField() === "Industry" && (value === undefined || value === null || value === "")) {  
      return value;  

    }

    //Checking for the Job Title/Job Role  field whether value is valid or not 

    if ((cell.getColumn().getField() === "Job Title" || cell.getColumn().getField() === "Job Role" ) && value !== undefined && value !== null && value !== "") {
      const cellWithError = value.startsWith("!");
      // console.log(cellWithError)
      if (cellWithError) {
        cell.getElement().classList.add('bg-danger');
        return value;
      }
      return value;  

    }

    if ((cell.getColumn().getField() === "Job Title" || cell.getColumn().getField() === "Job Role") && (value === undefined || value === null || value === "")) {  
      return value;  

    } 



    if (value === undefined || value === null || value === ""  || value === " ") {
      // Apply custom styling to highlight the empty field
      console.log('Last condition');
      cell.getElement().classList.add('bg-danger');  
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
    history: false,
    maxHeight: "100%",
    rowHeight: 40,
    selectable: false,
    printRowRange: "selected",
    validationMode: "blocking",
    selectablePersistence: false, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: jsonData, //assign data to table
    layout: "fitDataFill", //fit columns to width of table (optional)
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [10,20],
    movableColumns: true,
    paginationCounter: "rows",
    columns: [{title:"rowNo",field:"rowNo",formatter:function(cell,cellFormatterParams,onRendered){

        const row = cell.getRow();
        const currentPage = row.getTable().getPage();
        const pageSize = row.getTable().getPageSize();
        const rowPos = row.getPosition(true);
        let rowNumber = (currentPage - 1) * pageSize + rowPos;
      
    return rowNumber;
    },hozAlign: "left"},...newColumnHeaders],
    selectableCheck: function (row) {      
      return row.getData();
    },    
    rowContextMenu: [
      {
        label: "Delete Row",
        action: function (e, row) {
          if (tableEditable === false) {
            showToast("Please click on 'Enable Edit' to perform Edit or Delete! ", " linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
          } else {
            // console.log('row deleted!!!');
            row.delete();
            const currentPage = row.getTable().getPage(); 
            const pageSize = row.getTable().getPageSize(); 
            table.redraw(true);
         
            
          }

        }
      },
    ],
   
  });

  let selectedRows;

  table.on("rowSelectionChanged", function (data, rows) { 
    // console.log(data.length);
    // console.log(data)

    selectedRows = data;

    if (data.length > 0) { 
      // deleteSelection.removeAttribute("disabled",""); 
    } 

  });



  //   table.on("rowDeleted", function(row){
  //     console.log("row deleted...");
  //    const rows = table.getRows();

  // });

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

modify.addEventListener('click', () => {
  if (tableEditable === false) {
    tableEditable = true;
    modify.innerText = "Disable Editing";
    showToast("Editing Mode On!!", "#76b900");
  } else {
    tableEditable = false;
    modify.innerText = "Enable Editing";
    showToast("Edit Complete!!Data Saved", "#76b900");
  }
}) 


downloadBtn.addEventListener('click', () => {

  if (tableEditable === true) {

    showToast('Table is still on edit mode !! Click done if complete editing');

  } else {

    console.log('download the data...!');
    table.download("csv", "data.csv", { delimiter: "," });

  }

})




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
  // console.log(currentButton.remove());

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



approve.addEventListener('click', async () => {
  // console.log(columnsToDelete);   

  let tableRows = table.getData();

  // console.log(tableRows); 

  if (tableEditable === true) {
    showToast('Table still on edit mode click done to approve the changes !!!', " linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");

  } else { 

    //creating a web worker
    const worker = new Worker('worker.js');

    worker.addEventListener('message', async (event) => {
      const errorMessage = [];
      if (event.data.error) {
        // Handle errors and display toast messages
        event.data.messages.forEach((message) => {
          errorMessage.push(message);
        });
        if (errorMessage.length < 10) {
          errorMessage.forEach((msg) => showToast(msg, "linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)"));

        }
        if (errorMessage.length > 50) {
          showToast('too many error messages, error cells are marked in RED!!', "linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
        }



      } else {

        // Sending data if no Error START

        const industryNameCheck = await checkIndustryData();
        console.log(industryNameCheck); 

        if (industryNameCheck.length > 0) {
          industryNameCheck.forEach((msg) => showToast(msg, "linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)"));
        } else { 

          if (documentApproval === false) {
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
            if (result.message.result[0].status === "Queued") {  
              container1.style.display = "none";
              loaderContainer.style.visibility = "visible";
              loaderTextBelow.innerText = "Your document is being processed !!And sent to marketo"
              DownloadBtnContainer.style.display = "none";

              // Hiding the  table and showing the Loader
              // container1.style.display = "none";
              // loaderContainer.style.display = "block";
              // DownloadBtnContainer.style.display = "none"; 
            } else {

              showToast("Error Occured while Uploading the data to marketo!!", " linear-gradient(0deg, rgba(195,96,34,1) 0%, rgba(253,45,67,1) 100%)");
            }

          } else {
            showToast("Document has already been approved!!!", "#76b900"); 
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

async function sendJsonToMarketo(updatedTableData) {

  console.log('table Data sent to backend!!');

  const res = await fetch('http://localhost:5000/approved/data', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({updatedTableData,fileName:currentWorkingFile}),
  });

  const data = await res.json();
  return data;

}



function showToast(message, colour) {

  Toastify({
    text: `${message}`,
    className: "tabulator-selected",
    duration: 5000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: colour,
      color: "#000",
      fontWeight: "bold",
    },
    onClick: function () { } // Callback after click
  }).showToast();

}

//function for checking data in Industry column

// async function checkIndustryData() {

//   const errorCells = [];
//   table.getColumns().forEach((col) => {
//     const field = col.getField();

//     if (field === "Industry") {
//       const cells = col.getCells();
//       cells.forEach((cell) => {

//         if (cell.getElement().classList.contains("bg-danger")) {
//           const row = cell.getRow();
//           // console.log(row.getPosition())

//           errorCells.push(`Value ${cell.getValue()} ON Row no. ${row.getPosition()} is not Valid`);

//         }

//       });
//     }

//   });

//   return errorCells;

// }




async function checkIndustryData() { 

return new Promise((resolve) => {

  setTimeout(() => { 
    const errorCells = [];
      table.getColumns().forEach((col) => {
        const field = col.getField();
    
        if (field === "Industry") {
          const cells = col.getCells();
          cells.forEach((cell) => {
    
            if (cell.getElement().classList.contains("bg-danger")) {
              const row = cell.getRow();
              // console.log(row.getPosition())
    
              errorCells.push(`Value ${cell.getValue()} ON Row no. ${row.getPosition()} is not Valid`);
    
            }
    
          });
        }
        // For checking the Industry field 
        if (field === "Job Title" || field === "Job Role") {
          const cells = col.getCells();
          cells.forEach((cell) => {
    
            if (cell.getElement().classList.contains("bg-danger")) {
              const row = cell.getRow();
    
              errorCells.push(`Value ${cell.getValue()} ON Row no. ${row.getPosition()} is not Valid`);
    
            }
    
          });
        }
    
      });

      resolve(errorCells); 

  },0);

})

}