//Variables
const formLogin = document.querySelector('#formlogin');
const formRegister = document.querySelector('#formregister')

//Event Listeners
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const datosForm = new FormData(formLogin);

    fetch('#', {
        method: "POST",
        body: datosForm
    })
    .then(resp => resp.text())
    .then(data => {
        console.log(data);
    })
})

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();


    const datosRegForm = new FormData(formRegister);

    fetch('#', {
        method: "POST",
        body: datosRegForm
    })
    .then(resp => resp.text())
    .then(data => {
        console.log(data);
    })

})