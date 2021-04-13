let employeeArray=[];
let total=0;


let tableEl=document.getElementById('table');

// create a constructor function
'use restriction';
function Employee(Name,email,department){
  this.Name=Name;
  this.email=email;
  this.department=department;
  this.salary=getRandomIntInclusive(100, 500);

  employeeArray.push(this);
  console.log(employeeArray);

  localStorage.setItem('employees',JSON.stringify(employeeArray));
}


// random salary function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




//   eventlistener
let form=document.getElementById('form');
form.addEventListener('submit',handle);

function handle(event){
  event.preventDefault();
  let nameval=event.target.Name.value;
  let emailval=event.target.email.value;
  let departmentval=event.target.department.value;

  let newEmployee=new Employee(nameval,emailval,departmentval);
  newEmployee.render();


}



// render function

Employee.prototype.render=function(){
  let newRow=document.createElement('tr');
  tableEl.appendChild(newRow);

  let nameCell=document.createElement('td');
  nameCell.textContent=this.Name;
  newRow.appendChild(nameCell);

  let emailCell=document.createElement('td');
  emailCell.textContent=this.email;
  newRow.appendChild(emailCell);

  let departmentCell=document.createElement('td');
  departmentCell.textContent=this.department;
  newRow.appendChild(departmentCell);

  let salaryCell=document.createElement('td');
  salaryCell.textContent=this.salary;
  newRow.appendChild(salaryCell);

  sum();

};


// getting element

if(localStorage.getItem('employees') !== null){
  let lsArray=JSON.parse(localStorage.getItem('employees'));
  for(let i=0;i<lsArray.length;i++){
    let newEmployee=new Employee(lsArray[i].Name,lsArray[i].email,lsArray[i].department);
    newEmployee.render();
  }
}



// sum function

function sum(){
  total=0;
  for(let i=1;i<tableEl.rows.length;i++){
    total=total+parseInt(tableEl.rows[i].cells[3].textContent);
  }

  let x= document.getElementById('tot');
  x.textContent='Total= '+total;
}
