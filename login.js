
    function validarFormulario(event) {
        event.preventDefault();

        const email = document.getElementById('inputEmail4').value.trim();
        const senha = document.getElementById('Senha').value.trim();

        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos antes de continuar.');
        } else {
            // Redirecionar para o site desejado após o envio do formulário
            window.location.href = 'tela.html'; // Substitua 'https://seusite.com' pelo URL do site desejado
        }
    }

    document.querySelector('form').addEventListener('submit', validarFormulario);

