const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //obtenemos los valores de los inputs
    const usernameValue=username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue===''){
        //mostrar error
        //agregar clase error
        setErrorFor(username, 'El usuario no puede ser un campo vacío');

    }else{
        //agregar clase success
        setSuccessFor(username);

    }

    if(emailValue===''){
        setErrorFor(email, 'El email no puede ser un campo vacío')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'El email no es válido')
    }else{
        setSuccessFor(email)
    }

    if(passwordValue ===''){
        setErrorFor(password, 'La contraseña no puede ser un campo vacío')
    }else{
        setSuccessFor(password);
    }


    if(password2Value ===''){
        setErrorFor(password2, 'La contraseña no puede ser un campo vacío')
    }else if(passwordValue!== password2Value){
        setErrorFor(password2, 'Las contraseña no coinciden')
    }
    else{
        setSuccessFor(password2);
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

let isEmail=(email)=>{
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}