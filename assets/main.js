const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading-text");


function countUp (max, time) {   // countUP, con los parametros descritos fuera de la función, en este caso el intervalo maximo y el tiempo
    let num = 0;  //Start on 0
    let breaker = time / max; // calcula el tiempo entre las dos etapas Start y Final
    // create an inner function that performs one step of counting
    let count = function () {
      num++;  // sumamos 1 + acc
      if (num <= max) {  //Si numero (Total) es menor igual que el max
        loading.innerHTML = ` ${num}%`;   
        // añadimos a la class ".loading-text" el valor numerico, 
        //Se introduce en en template , para asi poder introducir el simbolo del %
        loading.style.opacity = scale(num, 0, 100, 1, 0);
        //Damos style al ".loading-text", en este caso el cambio de opacidad *visibilidad
        bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`;
        window.setTimeout(count, breaker);
        
      }
      function scale (num, inMin, inMax, outMin, outMax) {
        return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    }
    
    //  llamamos a la  function 
    count();
  }
  
  countUp(100, 5000); 






















