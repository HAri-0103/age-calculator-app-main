//accessing input value
const day = document.querySelector("#day");
const month = document.querySelector("#month"); 
const year = document.querySelector("#year");

//output
const out_day = document.querySelector(".dd");
const out_month = document.querySelector(".mm"); 
const out_year = document.querySelector(".yy");

//real-time day month year
const date = new Date();
let days=date.getDate();
let months = date.getMonth()+1;
let years = date.getFullYear();
const arr_months =[31,28,31,30,31,30,31,31,30,31,30,31];
let btn = document.querySelector("button");
let valid = true;

btn.addEventListener("click",output);
function checking_day(){
    let valid = true;
    if(day.value===""){
        document.querySelector(".input-day").style.color="red";
        document.querySelector(".input-month").style.color="red";
        document.querySelector(".input-year").style.color="red";
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        document.querySelector(".error-day").textContent="This field is required";
        valid = false;
    }else if(day.value<=0||day.value>arr_months[month.value-1]||day.value>31){
        document.querySelector(".input-day").style.color="red";
        document.querySelector(".input-month").style.color="red";
        document.querySelector(".input-year").style.color="red";
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        document.querySelector(".error-day").textContent="Must be a valid day";
        valid = false;
    }else{
        document.querySelector(".input-day").style.color="hsl(0, 0%, 86%)";
        day.style.borderColor = "hsl(0, 0%, 86%)";
        month.style.borderColor = "hsl(0,0%,86%)";
        year.style.borderColor = "hsl(0,0%,86%)";
        document.querySelector(".error-day").textContent="";
        valid = true;
    }
        return valid;
    };
function checking_month(){
    let valid = true;
    if(month.value===""){
        document.querySelector(".input-day").style.color="red";
        document.querySelector(".input-month").style.color="red";
        document.querySelector(".input-year").style.color="red";
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        document.querySelector(".error-month").textContent="This field is required";
        valid = false;
    }
    else if(month.value<=0||month.value>12){
        document.querySelector(".input-day").style.color="red";
        document.querySelector(".input-month").style.color="red";
        document.querySelector(".input-year").style.color="red";
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        document.querySelector(".error-month").textContent="Must be a valid month";
        valid = false;
    }else{
        document.querySelector(".input-month").style.color="hsl(0, 0%, 86%)";
        day.style.borderColor = "hsl(0, 0%, 86%)";
        month.style.borderColor = "hsl(0,0%,86%)";
        year.style.borderColor = "hsl(0,0%,86%)";
        document.querySelector(".error-month").textContent="";
        valid = true;
    }
        return valid;
    };
function checking_year(){
    let valid = true;
    if(year.value===""){
        document.querySelector(".input-day").style.color="red";
        document.querySelector(".input-year").style.color="red";
        document.querySelector(".input-month").style.color="red";
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        document.querySelector(".error-year").textContent="This field is required";
        valid = false;
    }else if(year.value<=0||year.value>years){
        document.querySelector(".input-day").style.color="red";
        document.querySelector(".input-year").style.color="red";
        document.querySelector(".input-month").style.color="red";
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        document.querySelector(".error-year").textContent="Must be a valid year";
        valid = false;
    }else{
        document.querySelector(".input-year").style.color="hsl(0, 0%, 86%)";
        day.style.borderColor = "hsl(0, 0%, 86%)";
        month.style.borderColor = "hsl(0,0%,86%)";
        year.style.borderColor = "hsl(0,0%,86%)";
        document.querySelector(".error-year").textContent="";
        valid = true;
    }
        return valid;
    };
function output(){
    let check_day = checking_day();
    let check_month = checking_month();
    let check_year = checking_year();
   if (check_day&&check_month&&check_year){
    if(day.value>days){
    days = days+arr_months[month.value-1];
    months = months-1;
    }
    if(month.value>months){
        months=months + 12;
        years = years-1;
    }
    let dd = days-day.value;
    let mm = months-month.value;
    let yy = years - year.value;

    out_day.textContent = dd+" ";
    out_month.textContent = mm+" ";
    out_year.textContent = yy+" ";
   }
};