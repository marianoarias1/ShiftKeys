const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})


function checkInputs(){
    //obtenemos los valores de los inputs
    const usernameValue=username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue===''){
        //mostrar error
        //agregar clase error
        setErrorFor(username, 'El usuario no puede ser un campo vacío');

    }else{
        //agregar clase success
        setSuccessFor(username);

    }


    if(passwordValue ===''){
        setErrorFor(password, 'La contraseña no puede ser un campo vacío')
    }else{
        setSuccessFor(password);
    }


    heroForm.classList.remove('success','error')
}

let setErrorFor= (input, mensaje)=>{
    const heroForm= input.parentElement;

    const small= heroForm.querySelector('small').textContent = mensaje;

    heroForm.classList.toggle('error');
}

let setSuccessFor=(input)=>{
    const heroForm= input.parentElement;

    heroForm.classList.remove('error')

    heroForm.classList.toggle('success')
}