function resultado(sumatorio, numeros, nodo){

    // Delete tag if exist
    if( document.querySelector('#titulo') ){ document.querySelector('#titulo').remove();  }

    let numbers = '';
    
    if(numeros.length > 0){
        for(let i = 0; i < numeros.length; i++){

            if(i%4==0){ numbers += ' <br> '; }

            if(i != 0){ numbers +=  ' + '+String( numeros[i] );
            } else { numbers +=  ''+String( numeros[i] );  }
        }
    } else { numbers += ' 0'; }

    let title = document.createElement('h1');
    title.setAttribute('id','titulo');
    title.innerHTML = `Numeros utilizados ${numeros.length} \n\n  ${numbers} <br> Resultado: ${sumatorio}`
    nodo.appendChild(title);

    return;
}


    let x = document.getElementById('boton');
    let xx = document.getElementById('main');

    x.addEventListener('click',(e) => {

        //e.preventDefault();

        let sumatorio = 0;
        let numeros = [];

        while(true){
            try{
                let y = Number( prompt(`Sumatorio: ${sumatorio} \n\n Ingresa un numero para ser sumado o escribe 0 para salir: `) );
                
                if(y == 0){
                    resultado( sumatorio, numeros, xx);
                    break;
                } else if( isNaN(y) ){
                    continue;
                } else{
                    numeros.push(y);
                    sumatorio += y
                };

            } catch ( error ){
                console.log(error);
            };
        };
    });