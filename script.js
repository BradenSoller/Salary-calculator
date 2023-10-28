let monthlycap = 200000


function handleSubmit(event) {
    console.log('does this work ? no');
  
    event.preventDefault();
    
  
    //inputs
    let firstName = document.getElementById('firstNameInput')
    let lastName = document.getElementById('lastNameInput')
    let idInput = document.getElementById('idInput')
    let titleInput = document.getElementById('titleInput')
    let annualSalary = document.getElementById('annualSalaryInput').value;
  

    //output
    let table = document.getElementById('tableBody')
    table.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${idInput.value}</td>
    <td>${titleInput.value}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteText(event)">❌</button></td>
     </tr>`
    
    //clear inputs 
    firstName.value = ""
    lastName.value = ""
    idInput.value = ""
    titleInput.value = ""
    document.getElementById('annualSalaryInput').value = "";
  

    monthlycap -= annualSalary / 12
    console.log(monthlycap);
  
   document.getElementById('over-budget').innerHTML -= annualSalary / 12;

    if (monthlycap < 0 ) {
        console.log('under');
        document.getElementById('over-budget').style.color = "red"
}
    
   
   


  

   
}

    //delete when button is clicked 
    function deleteText(event) {
        event.target.parentElement.parentElement.remove();
    }
   


        
   


