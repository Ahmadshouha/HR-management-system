'use strict';

let allEmployees = [];

function Employees(EmployeeID,FullName,Department,Level,Image){

    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    this.Salary = 0;
    allEmployees.push(this)
}

let Department=["Administration","Marketing","Development","Finance"];
let Level=["Junior","Mid-Senior","Senior"];
let GhaziSamer = new Employees(1000,"Ghazi Samer",Department[0],Level[2]);
let LanaAli = new Employees(1001,"Lana Ali",Department[3],Level[2]);
let TamaraAyoub = new Employees(1002,"Tamara Ayoub",Department[1],Level[2]);
let SafiWalid = new Employees(1003,"Safi Walid",Department[0],Level[2]);
let OmarZaid = new Employees(1004,"Omar Zaid",Department[2],Level[2]);
let RanaSaleh = new Employees(1005,"Rana Saleh",Department[2],Level[0]);
let HadiAhmad = new Employees(1006,"Hadi Ahmad",Department[3],Level[1]);

Employees.prototype.randomSalary= function(){
var sal=0;
 if(this.Level=="Senior")
 {
    sal = Math.random()*(2000-1500)+1500;   
 }
 else if (this.Level=="Mid-Senior")
 {
    sal = Math.random()*(1500-1000)+1000;
 }
 else if(this.Level == "Junior")
 {
    sal = Math.random()*(1000-500)+500;
 }
 
console.log(sal);
return sal;
}


Employees.prototype.render= function(){ 
    var sal=this.randomSalary();
    document.write(`<p> the employee full name is :${this.FullName}</p>`);
    document.write(`<p> the employee salary is :${sal}</p>`);

}

for(let i=0; i<allEmployees.length;i++){
    console.log(allEmployees[i]);
    allEmployees[i].randomSalary();
    allEmployees[i].render();
}
Employees.prototype.netSalary= function(){ 
    var tax=0.075;
    var sal=(this.randomSalary()* tax);
    sal=this.randomSalary()-sal;
    document.write(`<p> the employee full name is :${this.FullName}</p>`);
    document.write(`<p> the employee salary is :${sal}</p>`);

}