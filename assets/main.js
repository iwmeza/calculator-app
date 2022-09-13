// || VARIABLES
const buttons       = document.querySelectorAll('.button');
var screenDigits    = document.querySelector('.calculator__screen__digits');
var screenOperation = document.querySelector('.calculator__screen__operations');
var operatingOne    = [];
var operatingTwo    = [];

var mode            = document.getElementById('mode');

// Operandings and operation
var a, b, operation;

// || FUNTIONS
buttons.forEach( el => {
    el.addEventListener('click', function(e){
        e.preventDefault();

        let digit   = this.children[0].textContent;

        switch(digit){
            case '+':
                operation   = '+';
                a           = operatingOne.join("");
                b           = operatingTwo.join("");
                type        = 'operations';

                screenCalculator(a, b, type);

                return false;

            case '-':
                operation   = '-';
                a           = operatingOne.join("");
                b           = operatingTwo.join("");
                type        = 'operations';

                screenCalculator(a, b, type);

                return false;
            break;

            case '*':
                operation   = '*';
                a           = operatingOne.join("");
                b           = operatingTwo.join("");
                type        = 'operations';

                screenCalculator(a, b, type);

                return false;
            break;

            case '/':
                operation   = '/';
                a           = operatingOne.join("");
                b           = operatingTwo.join("");
                type        = 'operations';

                screenCalculator(a, b, type);

                return false;
            break;
            
            case '=':
                result(a, b, operation);

                return false;

            case 'RESET':

                location.reload();

                return false;
            break;

            case 'DEL':

                deleteDigit();

                return false; 
            break;
        }

        if(typeof operation == 'undefined'){
            operatingOne.push(digit)

            a = operatingOne.join("")

            screenCalculator(a, b = b, type = 'digits');

        } else{
            operatingTwo.push(digit)

            b = operatingTwo.join("")

            screenCalculator(a = a, b, type = 'digits');
        }
    });
});

function screenCalculator(a, b, type){
    if(type == 'operations'){
        screenOperation.children[0].innerHTML = a + operation + b; 
    } else{
        if(typeof a == 'undefined' && typeof b == 'undefined'){
            screenDigits.children[0].innerHTML = 0
        } else{
            if(typeof a !== 'undefined' && typeof b == 'undefined'){
                screenDigits.children[0].innerHTML = a;
            } else{
                screenDigits.children[0].innerHTML = b;
            }
        }
    }
}

function sum(a, b) { return Number(a) + Number(b); }

function subtract(a, b) { return Number(a) - Number(b) }

function multiply(a, b) { return Number(a) * Number(b) }

function divider(a, b) { return Number(a) / Number(b) }

function result(a, b, operation){
    var result;

    if(typeof operation === 'undefined'){

        if(typeof a !== 'undefined' || typeof b === 'undefined'){

            a = operatingOne.join("");
            
            screenCalculator(a, b = b, type = 'digits');
        } else{
            screenDigits.children[0].innerHTML      = 0;
            screenOperation.children[0].innerHTML   = '';
        }

    } else{
        a = a.length === 0 ? 0 : a;
        b = b.length === 0 ? 0 : b;

        switch(operation){
            case '+':
                result = sum(a, b); 
            break;

            case '-':
                result = subtract(a, b); 
            break;

            case '*':
                result = multiply(a, b); 
            break;

            case '/':
                result = divider(a, b); 
            break;
        }

        screenDigits.children[0].innerHTML      = result;
        screenOperation.children[0].innerHTML   = a + operation + b;
        
        resetOperations(result);
    }
}

function resetOperations(result){
    operation       = undefined;
    b               = undefined;
    operatingOne    = [result];
    operatingTwo    = [];
}

function deleteDigit(){
    if(operatingOne.length !== 0 ){
        operatingOne.pop();

        screenDigits.children[0].innerHTML = operatingOne.join("");
    } 

    if(typeof operation !== 'undefined' && operatingTwo.length !== 0){
        operatingTwo.pop();

        b = operatingTwo.join("");

        screenDigits.children[0].innerHTML = operatingTwo.join("");
    } 
}

mode.addEventListener('click', function(e){
    e.preventDefault();

    this.classList.toggle('light');

    this.classList.contains('light') == true ? themeLight() : currentTheme();
});

function themeLight(){
    document.querySelector('.main').style.background = '#000';
    document.getElementsByTagName('h1')[0].style.color = '#FFF';  
    document.getElementById('username').style.color = '#FFF';  
    document.querySelector('.calculator').style.background = '#E6E6E6';
    document.querySelector('.calculator__header div#mode span').style.background = '#62B5BD';
    document.querySelector('.calculator__screen').style.background = '#EEEEEE';
    document.querySelector('.calculator__body').style.background = '#D3CDCD';

    buttons.forEach(btn => {
        btn.style.background = '#E5E4E0';
        btn.style.color = '#323128';

        btn.addEventListener('mouseover', function(e){
            e.preventDefault();

            btn.style.background = '#FFF';
        });

        btn.addEventListener('mouseout', function(e){
            e.preventDefault();

            btn.style.background = '#E5E4E0';
        });
    });

    let btnDelete           = document.getElementById('delete')
    let btnReset            = document.getElementById('reset')
    let btnDeleteAndReset   = [btnDelete, btnReset];

        btnDeleteAndReset.forEach( el => {
            el.style.background = '#62B5BD';

            el.addEventListener('mouseover', function(e){
                e.preventDefault();
    
                this.style.background = 'rgb(170 227 233)';
            });
    
            el.addEventListener('mouseout', function(e){
                e.preventDefault();
    
                this.style.background = '#62B5BD';
            });
        });

    let btnEqual = document.getElementById('equal')
        btnEqual.style.background = '#FF8A38';

        btnEqual.addEventListener('mouseover', function(e){
            e.preventDefault();

            this.style.background = 'rgb(226 147 93)';
        });

        btnEqual.addEventListener('mouseout', function(e){
            e.preventDefault();

            this.style.background = 'rgb(255, 138, 56)';
        });

    document.querySelectorAll('span').forEach(el => {
        el.style.color = '#323128';
    })
}

function currentTheme(){
    document.querySelector('.main').style.background = '#FFF';
    document.getElementsByTagName('h1')[0].style.color = '#000';  
    document.getElementById('username').style.color = '#000';  
    document.querySelector('.calculator').style.background = 'rgb(59,70,100)';
    document.querySelector('.calculator__screen').style.background = 'rgb(24,31,50)';

    document.querySelector('.calculator__body').style.background = 'rgb(37,45,68)';

    buttons.forEach(btn => {
        btn.style.color = '#fff';
    });

    let btnDelete           = document.getElementById('delete')
    let btnReset            = document.getElementById('reset')
    let btnDeleteAndReset   = [btnDelete, btnReset];

    btnDeleteAndReset.forEach( el => {
        el.style.background = '#62B5BD';

        el.addEventListener('mouseover', function(e){
            e.preventDefault();

            this.style.background = 'rgb(135, 146, 179)';
        });

        el.addEventListener('mouseout', function(e){
            e.preventDefault();

            this.style.background = 'rgb(100,113,154)';
        });
    });

    let btnEqual = document.getElementById('equal')
        btnEqual.style.background = 'rgb(209,63,48)';

    btnEqual.addEventListener('mouseover', function(e){
        e.preventDefault();

        this.style.background = 'rgb(228, 115, 102)';
    });

    btnEqual.addEventListener('mouseout', function(e){
        e.preventDefault();

        this.style.background = 'rgb(209,63,48)';
    });

    document.querySelectorAll('span').forEach(el => {
        el.style.color = '#000';
    });

    document.getElementById('delete').children[0].style.color = '#fff';
    document.getElementById('reset').children[0].style.color = '#fff';
    document.getElementById('equal').children[0].style.color = '#fff';

    document.querySelector('.calculator__header span').style.color = '#fff';
    document.querySelector('.calculator__screen__operations span').style.color = '#fff';
    document.querySelector('.calculator__screen__digits span').style.color = '#fff';
    document.getElementById('mode').children[0].style.background = '#FA8D36';
}

window.onload = function(){ screenCalculator(); }