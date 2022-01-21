"use strict";

const display = document.querySelector(".display-screen");
const buttons = document.querySelectorAll("button");
const btnMC = document.querySelector("#mc");
const btnMR = document.querySelector("#mr");
const bfr = document.querySelectorAll(".bfr");
const afr = document.querySelectorAll(".afr");
const btn2nd = document.querySelector("#btn2nd");
const btnDeg = document.querySelector(".deg");
const btnRad = document.querySelector(".rad");
getComputedStyle(document.documentElement) // Get css variables 
    .getPropertyValue('--color-blue','--color-grey-deactive','--color-white-button','--color-black');

//Functions
function func_fact(){ //Factorial
    let fact=1,i;
    for(i = 1;i<=display.value;i++){
        fact = fact * i;
    }
    if(display.value <= 0) 
        throw new Error("Invalid input!");
    return fact; 
}

function func_xraisey() { 
    let dvalue,a,b;
    dvalue = display.value;
    a = dvalue.slice(0,dvalue.indexOf("^")); //Return 1st value 
    b = dvalue.slice(dvalue.indexOf("^") + 1); //RTeturn 2nd value
    return Math.pow(a,b);
}

let arr_ms = [] , i = 0;
function func_ms() { // Memory store
        if(arr_ms.length === 0)
            alert("Nothing is stored in the memory");
        else {
            display.value = arr_ms[i]; 
            i++;
            if(i === arr_ms.length){
                i = 0;
            }
        }
}
function func_mplus() { //Memory plus
    arr_ms.push(+display.value);
    display.value = '';
    btnMR.style.color = "var(--color-black)";
    btnMC.style.color = "var(--color-black)";
}
function func_mminus(){ //Memory minus
    arr_ms.push(-display.value);
    display.value = '';
    btnMR.style.color = "var(--color-black)";
    btnMC.style.color = "var(--color-black)";
}
function func_mr(){ //Memory recall
    let result = arr_ms.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      display.value = result;
}
function func_mc() { //Memory clear
    arr_ms = [];
    display.value = '';
    btnMR.style.color = "var(--color-grey-deactive)";
    btnMC.style.color = "var(--color-grey-deactive)";
}

function func_yrootx() { 
    let dvalue,a,b;
    dvalue = display.value;
    a = dvalue.slice(0,dvalue.indexOf("y")); 
    b = dvalue.slice(dvalue.indexOf("t") + 1);
    return Math.pow(a,1/b);
}

function func_logbase() {
    let dvalue,a,b;
    dvalue = display.value;
    a = dvalue.slice(0,dvalue.indexOf("l")); 
    b = dvalue.slice(dvalue.indexOf("e") + 1);
    return Math.log(a)/Math.log(b);
}

function func_2nd(){ //Button 2nd
    bfr.forEach((el) => el.classList.toggle('active'));
    afr.forEach((el) => el.classList.toggle('active'));
    afr.forEach((el) => {
        if(el.classList.contains("active"))
            btn2nd.style.backgroundColor = "var(--color-blue)";
        else
            btn2nd.style.backgroundColor = "var(--color-white-button)";
    })
}

function eventList(e){ //Event listener callback function
    let btnText = e.target.dataset.sign; // Using data attribute

    switch(btnText){
            case 'C':
                display.value = '';
                break;
            case '=':
                try{
                    if(display.value.includes("^")){
                        display.value = func_xraisey();
                    }
                    else if(display.value.includes("yroot")){
                        display.value = func_yrootx();
                    }
                    else if(display.value.includes("log base")){
                        display.value = func_logbase();
                    }
                    else{
                        display.value = eval(display.value);
                    }
                } catch {
                    display.value = "Error"
                }
                break;
            case 'dlt':
                if (display.value){
                   display.value = display.value.slice(0, -1);
                }
                break;
            case 'sin':
                if(btnDeg.classList.contains("active"))
                    display.value = mnjs.sin.deg(+display.value); //mnjs - npm library
                else 
                    display.value = Math.sin(display.value);
                break;
            case 'cos':
                if(btnDeg.classList.contains("active"))
                    display.value = mnjs.cos.deg(+display.value); //mnjs - npm library
                else 
                    display.value = Math.cos(display.value);
                break;
            case 'tan':
                if(btnDeg.classList.contains("active"))
                    display.value = mnjs.tan.deg(+display.value); //mnjs - npm library
                else 
                    display.value = Math.tan(display.value);
                break;
            case 'sinh':
                if(btnDeg.classList.contains("active"))
                    display.value = mnjs.sinh.deg(+display.value); //mnjs - npm library
                else 
                    display.value = Math.sinh(display.value);
                break;
            case 'cosh':
                if(btnDeg.classList.contains("active"))
                    display.value = mnjs.cosh.deg(+display.value); //mnjs - npm library
                else 
                    display.value = Math.cosh(display.value);
                break;
            case 'tanh':
                if(btnDeg.classList.contains("active"))
                    display.value = mnjs.tanh.deg(+display.value); //mnjs - npm library
                else 
                    display.value = Math.tanh(display.value);
                break;
            case 'floor':
                display.value = Math.floor(display.value);
                break;
            case 'ceil':
                display.value = Math.ceil(display.value);
                break;
            case 'round':
                display.value = Math.round(display.value);
                break;
            case 'sign':
                display.value = Math.sign(display.value);
                break;
            case 'trunc':
                display.value = Math.trunc(display.value);
                break;
            case 'log':
                display.value = Math.log10(display.value);
                break;
            case 'ln':
                display.value = Math.log(display.value); 
                break;
            case 'square':
                display.value = Math.pow(display.value,2);
                break;   
            case '1/x':
                display.value = Math.pow(display.value,-1);
                break; 
            case '|x|':
                display.value = Math.abs(display.value);
                break; 
            case 'exp':
                display.value = Math.exp(display.value);
                break;  
            case 'sqrt':
                display.value = Math.sqrt(display.value);
                break;
            case 'fact':
                try {
                    display.value = func_fact();
                  } catch (err) {
                    display.value = err.message;
                  }
            break; 
            case '10raisex':
                display.value = Math.pow(10,display.value);
                break;
            case '+/-':
                display.value = display.value*(-1);
                break;
            case 'mc':
                func_mc();
                break;
            case 'mr':
                func_mr(); 
                break;
            case 'mplus':
                func_mplus();
                break;
            case 'mminus':
                func_mminus();
                break;
            case 'ms':
                func_ms();
                break;  
            case '2nd':
                func_2nd();
                break;
            case 'cube':
                display.value = Math.pow(display.value,3);
                break;
            case '2raisex':
                display.value = Math.pow(2,display.value);
                break;      
            case 'cbrt':
                display.value = Math.cbrt(display.value);
                break;
            case 'eraisex':
                display.value = Math.pow(2.71828182846,display.value);
                break;
            case 'deg':
                btnDeg.classList.remove("active");
                btnRad.classList.add("active");
                break;
            case 'rad':
                btnRad.classList.remove("active");
                btnDeg.classList.add("active");
                break;
            case 'f-e':
                let num = (+display.value);
                display.value = num.toExponential();
                break;
            default:
                display.value += btnText;
        }   
}

//Event Listener
for(const btn of buttons){
    btn.addEventListener('click',eventList)
}



