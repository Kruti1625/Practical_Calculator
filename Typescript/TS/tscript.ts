//Queryselectors
const display = document.querySelector(".display-screen")! as HTMLInputElement;
const btnMC = document.querySelector("#mc")! as HTMLButtonElement;
const btnMR = document.querySelector("#mr")! as HTMLButtonElement;
const btn2nd = document.querySelector("#btn2nd")! as HTMLButtonElement;
const btnDeg = document.querySelector(".deg")! as HTMLButtonElement;
const btnRad = document.querySelector(".rad")! as HTMLButtonElement;
const buttons = document.querySelectorAll("button")!;
const afr = document.querySelectorAll(".afr")!;
const bfr = document.querySelectorAll(".bfr")!;
getComputedStyle(document.documentElement).getPropertyValue('--color-blue');
getComputedStyle(document.documentElement).getPropertyValue('--color-grey-deactive');
getComputedStyle(document.documentElement).getPropertyValue('--color-white-button');
getComputedStyle(document.documentElement).getPropertyValue('--color-black');
type BtnText = 'C' | '=' | 'dlt' | 'sin' | 'cos' | 'tan' | 'sinh' | 'cosh' | 'tanh' | 'pi' | 'e' 
| 'floor' | 'ceil' | 'round' | 'sign' | 'trunc' | 'log' | 'ln' | 'square' | '1/x' |'|x|' | 'exp' 
| 'sqrt' | 'fact' | '10raisex' | '+/-' | 'mc' | 'mr' | 'mplus' | 'mminus' | 'ms' | '2nd' | 'cube' 
| '2raisex' | 'cbrt' | 'eraisex' | 'deg' | 'rad' | 'f-e' ;

//Functions
function func_fact(){ //Factorial
    let fact = 1, i: number;
    for(i = 1; i <= (+display.value); i++){
        fact = fact * i;
    }
    if((+display.value) <= 0) 
        throw new Error("Invalid input!");
    return fact; 
}

function func_xraisey() {
    let dValue: string, a: string, b: string;
    dValue = String(display.value);
    a = dValue.slice(0,dValue.indexOf("^")); //Return 1st value 
    b = dValue.slice(dValue.indexOf("^") + 1); //Return 2nd value
    console.log(a,b);
    return Math.pow(+a,+b);
}

function func_yrootx() { 
    let dValue: string, a: string, b: string;
    dValue = String(display.value);
    a = dValue.slice(0,dValue.indexOf("y")); 
    b = dValue.slice(dValue.indexOf("t") + 1);
    return Math.pow(+a,1/(+b));
}

function func_logbase() {
    let dValue: string, a: string, b: string;
    dValue = String(display.value);
    a = dValue.slice(0,dValue.indexOf("l")); 
    b = dValue.slice(dValue.indexOf("e") + 1);
    return Math.log(+a)/Math.log(+b);
}

let arrMemory: number[] = [] , i = 0;
function func_ms() { // Memory store
        if(arrMemory.length === 0)
            alert("Nothing is stored in the memory");
        else {
            display.value = String(arrMemory[i]); 
            i++;
            if(i === arrMemory.length){
                i = 0;
            }
        }
}

function func_mplus() { //Memory plus
    arrMemory.push(+display.value);
    display.value = ''; 
    btnMR.style.color = "var(--color-black)";
    btnMC.style.color = "var(--color-black)";
}

function func_mminus(){ //Memory minus
    arrMemory.push(-display.value);
    display.value = '';
    btnMR.style.color = "var(--color-black)";
    btnMC.style.color = "var(--color-black)";
}

function func_mr(){ //Memory recall
    let result = arrMemory.reduce((acc: number, cur: number) => acc + cur, 0);
    display.value = String(result);
}

function func_mc() { //Memory clear
    arrMemory = [];
    display.value = '';
    btnMR.style.color = "var(--color-grey-deactive)";
    btnMC.style.color = "var(--color-grey-deactive)";
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

function eventList(e: any){ //Event listener callback function
    let btnText: BtnText = e.target.dataset.sign; // Using data attribute

    switch(btnText){
            case 'C':
                display.value = "";
                break;
            case '=':
                try{
                    if(display.value.includes("^")){
                        display.value = String(func_xraisey());
                    }
                    else if(display.value.includes("yroot")){
                        display.value = String(func_yrootx());
                    }
                    else if(display.value.includes("log base")){
                        display.value = String(func_logbase());
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
                    display.value = String(Math.sin((((+display.value) * Math.PI)/180)));
                else 
                    display.value = String(Math.sin(+display.value));
                break;
            case 'cos':
                if(btnDeg.classList.contains("active"))
                    display.value = String(Math.cos((((+display.value) * Math.PI)/180)));
                else 
                    display.value = String(Math.cos(+display.value));
                break;
            case 'tan':
                if(btnDeg.classList.contains("active"))
                    display.value = String(Math.tan((((+display.value) * Math.PI)/180)));
                else 
                    display.value = String(Math.tan(+display.value));
                break;
            case 'sinh':
                if(btnDeg.classList.contains("active"))
                    display.value = String(Math.sinh((((+display.value) * Math.PI)/180)));
                else 
                    display.value = String(Math.sinh(+display.value));
                break;
            case 'cosh':
                if(btnDeg.classList.contains("active"))
                    display.value = String(Math.cosh((((+display.value) * Math.PI)/180)));
                else 
                    display.value = String(Math.cosh(+display.value));
                break;
            case 'tanh':
                if(btnDeg.classList.contains("active"))
                    display.value = String(Math.tanh((((+display.value) * Math.PI)/180)));
                else 
                    display.value = String(Math.tanh(+display.value));
                break;
            case 'pi':
                display.value = String(Math.PI);
                break;
            case 'e':
                display.value = String(Math.E);
                break;
            case 'floor':
                display.value = String(Math.floor(+display.value));
                break;
            case 'ceil':
                display.value = String(Math.ceil(+display.value));
                break;
            case 'round':
                display.value = String(Math.round(+display.value));
                break;
            case 'sign':
                display.value = String(Math.sign(+display.value));
                break;
            case 'trunc':
                display.value = String(Math.trunc(+display.value));
                break;
            case 'log':
                display.value = String(Math.log10(+display.value));
                break;
            case 'ln':
                display.value = String(Math.log(+display.value)); 
                break;
            case 'square':
                display.value = String(Math.pow(+display.value,2));
                break;   
            case '1/x':
                display.value = String(Math.pow(+display.value,-1));
                break; 
            case '|x|':
                display.value = String(Math.abs(+display.value));
                break; 
            case 'exp':
                display.value = String(Math.exp(+display.value));
                break; 
            case 'sqrt':
                display.value = String(Math.sqrt(+display.value));
                break;
            case 'fact':
                try {
                    display.value = String(func_fact());
                  } catch (e: any) {
                    display.value = e.message;
                  }
            break;
            case '10raisex':
                display.value = String(Math.pow(10,+display.value));
                break;
            case '+/-':
                display.value = String((+display.value)*(-1));
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
                display.value = String(Math.pow(+display.value,3));
                break;
            case '2raisex':
                display.value = String(Math.pow(2,+display.value));
                break;      
            case 'cbrt':
                display.value = String(Math.cbrt(+display.value));
                break;
            case 'eraisex':
                display.value = String(Math.pow(Math.E,+display.value));
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
                display.value = String(num.toExponential());
                break;
            default:
                display.value += btnText;
        } 
}

//Event Listener
for(const btn of buttons){
    btn.addEventListener('click',eventList)
}