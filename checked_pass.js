function contrasenya(){
    let x = document.querySelector('#contra');
    //console.log(x.value, typeof(x.value)); //String

    let y = document.querySelector('.parrafo');

    if( y.classList.contains('bad') ){ y.classList.remove('bad'); }
    if( y.classList.contains('warm') ){ y.classList.remove('warm'); }
    if( y.classList.contains('check') ){ y.classList.remove('check'); }

    if( (x.value).length <= 8){
        y.classList.add('bad');
        y.textContent = 'Contraseña Demasiado Débil';

    } else if((x.value).length >= 8 && (x.value).length <= 10){
        y.classList.add('warm');
        y.textContent = 'Contraseña Débil';

    } else if ( (x.value).length > 10 ){
        y.classList.add('check');
        y.textContent = 'Contraseña Robusta';
    }
    return;
}

document.querySelector('#contra').addEventListener('keydown', (e)=>{
    contrasenya()
});