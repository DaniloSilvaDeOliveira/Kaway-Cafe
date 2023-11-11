
function showPass(){
    const senha = document.getElementById('senha');
    if(senha.type === 'password'){
        senha.type = 'text';
    }else{
        senha.type = 'password';
    }
}




function login(){
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    const error = document.getElementById('error');
    const errorCpf = document.getElementById('errorCpf');
    
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if(!regexCpf.test(cpf)){
        errorCpf.style.display = 'block';
    }else{
        errorCpf.style.display = 'none';
    }


    const data = { cpf, senha }
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    }
    //faz um fetch no endpoint login usando o metódo POST e passando o cpf e a senha e cria token com a resposta
    fetch('login', options).then(res => res.json()).then(async res => {
        if(res.accessToken === undefined){
            error.style.display = 'block';
        }else{
            localStorage.setItem('token', await res.accessToken);
            window.location.href = '/';
        }
    });
}