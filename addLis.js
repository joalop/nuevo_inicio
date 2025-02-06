function anyadir(){
            
    let anyadir_lista = document.querySelector('#anyadir_lista');
    let x = window.prompt('Valor de la nueva lista: ');

    let y = document.createElement('li');
    y.textContent = `${x}`;
    anyadir_lista.appendChild(y);
}

document.querySelector('#add_list').addEventListener('click', (e)=>{
    anyadir()
});

let add_list = document.querySelector('#add_list');