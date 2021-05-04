'use strict'
let form = document.getElementById('form')
let contain = document.getElementById('contain');
let table = document.createElement('table')
    contain.appendChild(table);


let arrOfall=[];
function Testing(fname,lname,number,mark){
    this.fname=fname;
    this.lname=lname;
    this.number=number;
    this.mark=mark;
    arrOfall.push(this);
    console.log(arrOfall);
}

let newStud = new Testing('Mahmoud', 'Ahmad', 123, 40 );


function handelsubmit(event){
    event.preventDefault();
const first = event.target;
const fname = first.fname.value;
const lname = first.lname.value;
const number = parseInt(first.number.value);
const mark = parseInt(first.list.value);
let newIns =  new Testing(fname,lname,number,mark);
saveLs();
newIns.render();
}

let headerTitle = ['First Name' , 'Last Name' , 'Number' , 'Mark'];
function header(){
    let headerRow=document.createElement('tr');
    table.appendChild(headerRow);
    let headerData;
    for(var i=0 ; i < headerTitle.length; i++){
        console.log(headerTitle[i]);
    let tdata = document.createElement('th')
    headerRow.appendChild(tdata);
    tdata.textContent = headerTitle[i];
    }
}


Testing.prototype.render= function(){

let row = document.createElement('tr');
table.appendChild(row);
let rowData;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = this.fname;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = this.lname;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = this.number;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = this.mark;

}


function renderall(){ 

    for (let i=0 ; i<arrOfall.length; i++){

    let row = document.createElement('tr');
    table.appendChild(row);

let rowData;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = arrOfall[i].fname;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = arrOfall[i].lname;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = arrOfall[i].number;
rowData = document.createElement('td');
row.appendChild(rowData);
rowData.textContent = arrOfall[i].mark;

}
}
getLs();
header();
renderall();

function saveLs(){
    let arr = JSON.stringify(arrOfall);
    localStorage.setItem('saved' , arr);
}

function getLs(){
    let data = localStorage.getItem('saved');
    let order = JSON.parse(data);

    if (order !== null){
        arrOfall=order;
    }
}



form.addEventListener('submit' , handelsubmit);