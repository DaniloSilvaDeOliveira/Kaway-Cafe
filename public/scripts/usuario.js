
async function preencherDados(){
    const inputNome = document.getElementById('nome');
    const inputCpf = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const data = { token: localStorage.getItem('token'), type: 'all' }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }
    const { nome, cpf, telefone } = await fetch('usuario', options)
    .then(res => res.json()).then(res => res);

    inputNome.value = nome;
    inputCpf.value = cpf;
    inputTelefone.value = telefone;
}

async function saveConf(){
    const inputNome = document.getElementById('nome');
    const inputCpf = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const smallNome = document.getElementById('sNome');
    const smallCpf = document.getElementById('sTelefone');
    //regex de nome que aceitem nomes compostos e acentos
    const regexNome = /^[a-zA-Z+áàãâéêíóôõúüçÁÀÃÂÉÊÍÓÔÕÚÜÇ]+( [a-zA-Z+áàãâéêíóôõúüçÁÀÃÂÉÊÍÓÔÕÚÜÇ]+)*$/;
    const regexTelefone = /^\(\d{2}\)\ \d{5}\-\d{4}$/;

    if(!regexNome.test(inputNome.value)){
        smallNome.style.display = 'block';
    }
    if(!regexTelefone.test(inputTelefone.value)){
        smallCpf.style.display = 'block';
    }
    if(regexNome.test(inputNome.value)){
        smallNome.style.display = 'none';
    }
    if(regexTelefone.test(inputTelefone.value)){
        smallCpf.style.display = 'none';
    }

    if(regexNome.test(inputNome.value) && regexTelefone.test(inputTelefone.value)){
        
        const data = { token: localStorage.getItem('token'), nome: inputNome.value, cpf: inputCpf.value, telefone: inputTelefone.value }
            const options = {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        await fetch('usuario', options)
        .then(async res => res.json())
        .then(async res => {
            try{
                if(res.error){
                    alert(res.error);
                }else{
                    //atualiza o token local
                    const token = res.accessToken;
                    var jsonToken = JSON.stringify(token);
                    jsonToken = JSON.parse(jsonToken);
                    localStorage.removeItem('token');
                    localStorage.setItem('token', await jsonToken.accessToken);
                    alert('Dados atualizados com sucesso');
                    window.location.href = '/';

                }
            }catch(err){
                alert(err.message);
            }
        });
    }
}