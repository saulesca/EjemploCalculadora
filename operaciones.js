let cifra="0";
let acumulador=0;
let resultado=0;
let sumar=false;
let restar=false;
let dividir=false;
let multiplicar=false;
let p_operacion=true;

function pantalla(numero) {
    if(cifra == "0")
    {
    document.getElementById("pantalla").value=numero;
    cifra=document.getElementById("pantalla").value;
    }
    else{    
    cifra=cifra+numero;
    document.getElementById("pantalla").value=cifra;
    }

}
function punto() {
    if(acumulador==0){
        cifra=cifra+".";
        document.getElementById("pantalla").value=cifra;
    }
    acumulador++;

}

//______________________________________________________________________________//

function suma() {
    if(restar){
        resultado=resultado-parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;      
    }
    else if(dividir){
        resultado=resultado/parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;            
    }
    else if(multiplicar){
        resultado=resultado*parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;            
    }
    else{
        resultado=resultado+parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;    
    }
  
    cifra="0";
    sumar=true;
    restar=false;
    dividir=false;
    multiplicar=false;
    p_operacion=false;
    acumulador=0;
}
function resta() {

    if(p_operacion==false){
            
        if(sumar){
            resultado=resultado+parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else if(dividir){
            resultado=resultado/parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else if(multiplicar){
            resultado=resultado*parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else{
            resultado=resultado-parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
    }
    else{
        resultado=parseFloat(cifra);
        p_operacion=false;

    }
    cifra="0";
    restar=true;
    sumar=false;
    dividir=false;
    multiplicar=false;
    acumulador=0;
}
//________

function division() {

    if(p_operacion==false){
            
        if(sumar){
            resultado=resultado+parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else if(restar){
            resultado=resultado-parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else if(multiplicar){
            resultado=resultado*parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else{
            resultado=resultado/parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
    }
    else{
        resultado=parseFloat(cifra);
        p_operacion=false;

    }
    cifra="0";
    restar=false;
    sumar=false;
    dividir=true;
    multiplicar=false;
    acumulador=0;
}

//____________
function multiplicacion() {

    if(p_operacion==false){
            
        if(sumar){
            resultado=resultado+parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else if(dividir){
            resultado=resultado/parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else if(restar){
            resultado=resultado-parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
        else{
            resultado=resultado*parseFloat(cifra);
            document.getElementById("pantalla").value=resultado;            
        }
    }
    else{
        resultado=parseFloat(cifra);
        p_operacion=false;

    }
    cifra="0";
    restar=false;
    sumar=false;
    dividir=false;
    multiplicar=true;
    acumulador=0;
}

//______________________________________________________________________________//

function igual() {
    
    if(sumar){
        resultado=resultado+parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;
    }
    else if(restar){
        resultado=resultado-parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;     
    }
    else if(dividir){
        resultado=resultado/parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;     
    }
    else if(multiplicar){
        resultado=resultado*parseFloat(cifra);
        document.getElementById("pantalla").value=resultado;     
    }
    resultado=parseFloat(document.getElementById("pantalla").value);
    cifra=0;
    acumulador=0;
}

function restaurar() {
cifra="0";
acumulador=0;
resultado=0;
sumar=false;
restar=false;
dividir=false;
multiplicar=false;
p_operacion=true;
document.getElementById("pantalla").value=cifra;
    
}
