function showDiv(name) {
   const agendaDiv = document.getElementById("agenda");
   const agendarDiv = document.getElementById("agendar");
    
    if(name == "agenda"){
        agendaDiv.style.display = "flex";
        agendarDiv.style.display = "none";
    }
    if(name == "agendar"){
        agendaDiv.style.display = "none";
        agendarDiv.style.display = "flex";
    }
}

function hourFormat(hour){
    //transforma a hora do formato 00:00:00 para 00:00
    //verifica se a hora está no formato 00:00 se estiver apenas retorna a hora
    if(hour.length == 5){
        return hour;
    }else{
        const hourArray = hour.split(':');
        hourArray.pop();
        return hourArray.join(':');
    }


}

function dayFormat(day){
    //transforma a data do formato 0000-00-00 para 00/00/0000
    const dayArray = day.split('-');
    dayArray.reverse();
    return dayArray.join('/');
}

async function agenda(){
    const token = localStorage.getItem('token');
    const data = { token: token}
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    }
    const table = document.getElementById("table");
    fetch('agenda', options)
    .then(res => res.json())
    .then(data => {
            data.response.forEach(element => {
                    const tr = document.createElement("tr");
                    const tdEntrada = document.createElement("td");
                    const tdSaida = document.createElement("td");
                    const tdData = document.createElement("td");
                    const tdStatusPagamento = document.createElement("td");
                    const tdQuarto = document.createElement("td");
                    const tdPreco = document.createElement("td");

                    //transforma o horário do element no seguinte formato: 00:00
                    element.horarioEntrada = hourFormat(element.horarioEntrada);
                    element.horarioSaida = hourFormat(element.horarioSaida);
                    //transforma a data do element no seguinte formato: 00/00/0000
                    element.data = dayFormat(element.data);

                    tdEntrada.textContent = element.horarioEntrada;
                    tdSaida.textContent = element.horarioSaida;
                    tdStatusPagamento.textContent = element.statusPagamento;
                    tdData.textContent = element.data;
                    tdQuarto.textContent = element.nQuarto;
                    tdPreco.textContent = "R$ " + element.precoFinal;

                    tr.appendChild(tdEntrada);
                    tr.appendChild(tdSaida);
                    tr.appendChild(tdData);
                    tr.appendChild(tdStatusPagamento);
                    tr.appendChild(tdQuarto);
                    tr.appendChild(tdPreco);

                    table.appendChild(tr);
                });
        })
        .catch(error => console.error('Error:', error));
}

async function generateOptions(dataASerPesquisada) {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    const horariosDoDia = generateHorariosDoDia();

    const response = await fetch('agenda/' + dataASerPesquisada, options);
    const data = await response.json();

    let horariosRestantes = horariosDoDia.filter(horario => {
        return !data.response.some(element => element.horarioEntrada == horario.horario);
    });

    if(dataASerPesquisada == new Date().toISOString().slice(0, 10)){
        const horarioAtual = new Date().getHours();
        const minutoAtual = new Date().getMinutes();
        const horaAtual = horarioAtual + ":" + minutoAtual + ":00";
        horariosRestantes = horariosRestantes.filter(horario => horario.horario >= horaAtual);
    }

    populateSelectOptions("entrada", horariosRestantes);
    populateSelectOptions("saida", horariosRestantes);
}

function generateHorariosDoDia() {
    return [
        {horario: "08:00:00"},
        {horario: "09:00:00"},
        {horario: "10:00:00"},
        {horario: "11:00:00"},
        {horario: "12:00:00"},
        {horario: "13:00:00"},
        {horario: "14:00:00"},
        {horario: "15:00:00"},
        {horario: "16:00:00"},
        {horario: "17:00:00"},
        {horario: "18:00:00"},
        {horario: "19:00:00"},
        {horario: "20:00:00"},
        {horario: "21:00:00"},
        {horario: "22:00:00"},
    ]
}

function populateSelectOptions(selectId, horarios) {
    //esvazia o select
    document.getElementById(selectId).innerHTML = "";
    const select = document.getElementById(selectId);
    horarios.forEach(horario => {
        horario.horario = hourFormat(horario.horario);
        const option = document.createElement("option");
        option.textContent = horario.horario;
        select.appendChild(option);
    });
}

async function gerarPreco(entrada, saida){
    const preco = document.getElementById("preco");

    const [horaEntrada] = entrada.split(":").map(Number);
    const [horaSaida] = saida.split(":").map(Number);

    const horas = horaSaida - horaEntrada;

    const precoFinal = horas * 100;
    preco.textContent = "";
    preco.append("R$ " + precoFinal);

    const inputAgendar = document.getElementById("inputAgendar");
    inputAgendar.removeAttribute("disabled");
}

function Agendar() {
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;
    const data = document.getElementById("data").value;
    const nQuarto = document.getElementById("nQuarto").value;
    const precoFinal = document.getElementById("preco").textContent;

    //trata o precoFinal para que ele fique apenas com o valor
    const precoFinalArray = precoFinal.split(" ");
    precoFinalArray.shift();
    const precoFinalString = precoFinalArray.join("");
    const precoFinalNumber = Number(precoFinalString);


    const token = localStorage.getItem('token');

    const dataAgendamento = {
        token: token,
        horarioEntrada: entrada,
        horarioSaida: saida,
        data: data,
        nQuarto: nQuarto,
        precoFinal: precoFinalNumber,
    }

    console.log(dataAgendamento);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(dataAgendamento)
    }

    fetch('agenda/agendar', options)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            alert("Agendamento realizado com sucesso!");
            showDiv("agenda");
        })
        .catch(error => console.error('Error:', error));
}


//verifica se a tela é maior que 768px, caso não seja, não exibe a tabela de agendamentos

if(window.innerWidth < 768){
    if(window.innerWidth < 768){
        const elements = document.querySelectorAll(".agendaButtons");
        elements.forEach(element => element.remove());
    }
}
    