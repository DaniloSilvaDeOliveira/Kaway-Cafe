//verifica os dados da requisição usando um regex e depois envia os dados para a api de cadastro usando o meteodo post

function showPass(){
    const senha = document.getElementById('senha');
    if(senha.type === 'password'){
        senha.type = 'text';
    }else{
        senha.type = 'password';
    }

}

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const sNome = document.getElementById('sNome');
    const sEmail = document.getElementById('sEmail');
    const sSenha = document.getElementById('sSenha');
    const sCPF = document.getElementById('sCPF');
    const sTelefone = document.getElementById('sTelefone');


    const regexNome = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    //padrão do telefone: (xx)xxxxx-xxxx
    const regexTelefone = /^\(\d{2}\)\ \d{5}\-\d{4}$/;


    if(!regexNome.test(nome)){
        sNome.style.display = 'block';
    }else{
        sNome.style.display = 'none';
    }

    if(!regexEmail.test(email)){
        sEmail.style.display = 'block';
    }else{
        sEmail.style.display = 'none';
    }

    if(!regexSenha.test(senha)){
        sSenha.style.display = 'block';
    }else{
        sSenha.style.display = 'none';
    }

    if(!regexCpf.test(cpf)){
        sCPF.style.display = 'block';
    }else{
        sCPF.style.display = 'none';
    }

    if(!regexTelefone.test(telefone)){
        sTelefone.style.display = 'block';
    }else{
        sTelefone.style.display = 'none';
    }

    


    if(regexNome.test(nome) && 
        regexEmail.test(email) && 
        regexSenha.test(senha) && 
        regexCpf.test(cpf) && 
        regexTelefone.test(telefone)){
        const data = {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            telefone: telefone
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(data)
        }
        //guarda a resposta da requisição em uma variável
        fetch('cadastro', options).catch(err => alert(err.message))
        .then(res => res.json()
        .then(data => {
            if(data.message === 'Usuário cadastrado com sucesso'){
                alert(data.message);
                window.location.href = '/login';
            }else{
                alert(data.message);
            }
        }));


    }
}