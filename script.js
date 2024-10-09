
// SELECCIONAR ELEMENTOS DEL DOM Y GUARDARLOS EN UNA CONSTANTE
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');



// RECORRIENDO LOS BOTONES Y ASIGNANDO EVENTOS
buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "borrarTodo"){ /* BOTON PARA BORRARLO TODO (CLEAR) */
            display.innerText = "";
            /* BORRANDO CARACTERES UNO POR UNO */
        }else if(item.id == "borrando"){
            let string = display.innerText.toString(); /**DEVUELVE CARACTERES */
            display.innerText = string.substr(0, string.length -1); /**METODO SUBSTRING (SUBSTR) */
            //genera una subcadena desde el inicio hasta el penúltimo carácter, lo que simula un "borrado hacia atrás" de un solo carácter.
        

            /*Si el display no está vacío y el botón presionado tiene el id "equal"
             se evalúa la expresión matemática mostrada en el display usando eval()*/
        }else if(display.innerText != '' && item.id == 'equal'){           

            display.innerText = eval(display.innerText);
        
        /*Si el display está vacío cuando se presiona "equal", se muestra "NULL" en la pantalla, indicando que no hay nada para evaluar.
         Después de 2 segundos, un temporizador (setTimeout()) borra el mensaje, devolviendo el display a un estado vacío.*/
        }else if(display.innerText == "" && item.id =='equal'){
            display.innerText = "NULL";
            setTimeout(() => (display.innerText = ""), 2000)
        
     /**Si ninguno de los casos anteriores es válido (es decir, si el botón no es "clear", "backspace" o "equal"),
      *el id del botón se añade al texto que ya está en el display. 
      *  Esto cubre los casos de números y operadores, que simplemente se agregan uno tras otro en la pantalla. */
        }else {
            display.innerText += item.id;
        }
    };
});

/* INTERRUPTOR PARA CAMBIAR EL TEMA DE LA CALCULADORA (SWITCH) */

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');


/** isDark es una variable booleana que inicialmente está en true, lo que indica que el tema oscuro está activado.*/
let isDark = true;

/**Al hacer clic en el botón de cambio de tema, se alternan las clases:

    * calculator.classList.toggle('dark'): agrega o quita la clase dark en la calculadora, 
      cambiando su estilo visual entre los modos oscuro y claro.
    * themeToggleBtn.classList.toggle('active'): cambia la apariencia del botón mismo para indicar qué tema está activo.

Finalmente, se invierte el valor de isDark (isDark = !isDark) para rastrear el estado actual del tema. */
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark =! isDark;
}