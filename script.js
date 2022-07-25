function msg() {
    alert("Login realizado com sucesso!");
  }
  
  const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');
  
    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassowrd);
  
    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            submitButton.textContent = "Loading...";
  
            fetch('http://homolog.vector.net.br:9292/autenticaUser?eUsuario="usuario"&eSenha="password"', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                if (response.status !== 200) {
                    return errorHandler();
                }
                
                successHandler();
                
            }).catch(() => {
                errorHandler();
            })
        })
    }
  }
  
  window.onload = init;