let email = document.getElementById('email');
let senha = document.getElementById('senha');
let button = document.getElementById('btn-entrar');

button.addEventListener('click', () => {
    let userEmail = email.value;
    let userSenha = senha.value;

    if ( !userEmail || !userSenha) {
        swal("Os campos de E-mail e senha devem ser preenchidos!","", "info");
        return
    }
    window.open('home.html', '_self');
});


       
     