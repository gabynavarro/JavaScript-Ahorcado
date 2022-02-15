
var canvas = document.getElementById("canvas");
var pincel = canvas.getContext("2d");   


function canvasDibujar(){
    canvas.width = 600;
    canvas.height = 400;
    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 0, 600, 400);
}
    
canvasDibujar();
 
function dibujarPoste(){
  pincel.beginPath();
  pincel.fillStyle = "red";
  pincel.fillRect(50,50,10,200);
}
dibujarPoste();
dibujarTrabesanio()
dibujarPiePalo();
function dibujarTrabesanio(){
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.fillRect(50,50,100,10);
    pincel.fillRect(150,50,5,50);//soga
    
}
function dibujarPiePalo(){
    pincel.strokeStyle="red";
    pincel.beginPath();    
    pincel.moveTo(100,250); 
    pincel.lineTo(25,250);
    pincel.lineTo(55,230); 
    pincel.closePath();
// Hacemos que se dibuje
    pincel.stroke(); 
    pincel.fill();    
}

function dibujarCabeza(){
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(150, 100, 20, 0, 2 * 3.14);
    pincel.fill();
}


function dibujarCuerpo(){
    datosCuerpo();   
    pincel.moveTo(150,100); 
    pincel.lineTo(150,175);     
    finCuerpo();   
}

function dibujarBrazoIzq(){
    datosCuerpo();   
    pincel.moveTo(155,120); 
    pincel.lineTo(120,130);     
    finCuerpo();
}

function dibujarBrazoDer(){
    datosCuerpo();     
    pincel.moveTo(155,120); 
    pincel.lineTo(180,130);     
    finCuerpo();
}

function dibujarPiernaIzq(){
   datosCuerpo();      
    pincel.moveTo(150,175); 
    pincel.lineTo(120,200);     
    finCuerpo();    
}

function dibujarPiernaDer(){
    datosCuerpo();     
    pincel.moveTo(150,175); 
    pincel.lineTo(180,200);     
    finCuerpo();
}

function datosCuerpo(){
    pincel.lineWidth = 5;
    pincel.strokeStyle="blue";
    pincel.beginPath();
}
function finCuerpo(){
    pincel.closePath();
    pincel.stroke(); 
    pincel.fill();    
}
        