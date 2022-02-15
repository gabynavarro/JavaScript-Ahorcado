            const listaPalabras = ['caballo', 'oveja', 'cerdo', 'chimpance', 'conejo', 'cordero', 'elefante'];
            let palabraAdivinar = [];
            let palabraMostrar = [];
            let historialLetrasUsuario = [];
            let numIntentos = 6;

            prepararJuego();
            dibujarIncognitaas();
            function prepararJuego () {
                
                let posAleatoriaListaPalabras = Math.floor(Math.random()*listaPalabras.length);
                let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];            
                palabraAdivinar = palabraAleatoria.split('');
                for (let letra of palabraAdivinar) {
                    palabraMostrar.push('_');
                }
            }    
     

         function dibujarIncognitaas(){
             contador=250;
            for (let i = 0; i < palabraMostrar.length; i++) {
                dibujarLineaPalabra(contador, palabraMostrar[i]);
                contador=contador+30;
            }
         }

         function dibujarFallos(){
            contador=250;
           for (let i = 0; i < historialLetrasUsuario.length; i++) {
               dibujarLetrasFallos(contador, historialLetrasUsuario[i]);
               contador=contador+20;
           }
        }
     
         function dibujarLetrasFallos(contador, letra){            
            pincel.font="bold 15px Georgia";
            pincel.fillStyle="red";            
            pincel.fillText(letra, contador+10, 200);            
 
         }   
        
        function dibujarLineaPalabra(contador, letra){            
           pincel.font="bold 30px Georgia";
           pincel.fillStyle="blue";            
           pincel.fillText(letra, contador+20, 300);            

        }
        function comprobarPulsadoEnter (evento) {
            if (evento.code == 'Enter') {              
                comprobarLetraUsuario();                
            }
        }

        function comprobarLetraUsuario () {           
            let letraUsuario = nodoLetra.value;           
            nodoLetra.value = '';          
            nodoLetra.focus();            
            for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
                if (letraUsuario == letraAdivinar) {     
                    palabraMostrar[posicion] = letraAdivinar;
                    console.log(palabraMostrar);
                }
            }
           
            if (!palabraAdivinar.includes(letraUsuario)) {
                // Restamos un intento              
                numIntentos -= 1;
                // Guardamos en el historial la letra pulsada por el usuario
                historialLetrasUsuario.push(letraUsuario);
                console.log(historialLetrasUsuario);              

            }
            dibujarIncognitaas();
            dibujarFallos();
            acabarJuego();     

        }
         
        function acabarJuego () {
            // Ha ganado: ¿Le queda guiones al jugador?
            switch (numIntentos){
                case 5 : dibujarCabeza(); break; 
                case 4 : dibujarCuerpo(); break;
                case 3 : dibujarBrazoDer(); break;
                case 2 : dibujarBrazoIzq(); break;
                case 1 : dibujarPiernaDer(); break;
                case 0 : dibujarPiernaIzq(); break;
                default:
                    console.log('default');
            }
             

            if (!palabraMostrar.includes('_')) {
                alert('Has ganado!!!');
                // Refrescamos la página para volver a jugar
                location.reload(true);
            }
            // Ha perdido: ¿Tiene 0 intentos?
            if (numIntentos == 0) {
                alert('Has Perdido!!! Era: ' + palabraAdivinar.join(''));
                // Refrescamos la página para volver a jugar
                location.reload(true);
            }
        }

            
        //EVENTOS
        let modoBton=document.querySelector("#ingresar");
        let nodoLetra = document.querySelector('#Letra');
         modoBton.addEventListener('click', comprobarLetraUsuario);
         nodoLetra.addEventListener('keyup', comprobarPulsadoEnter);
 
     