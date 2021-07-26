function pegarDadosForm() {

    data = {

        "nome": document.querySelector('#nome').value,
        "email": document.querySelector('#email').value,
        "telefone": document.querySelector('#telefone').value,
        "cpf": document.querySelector('#cpf').value,
        "endereco": document.querySelector('#endereco').value,
        "numero": document.querySelector('#numero').value,
        "complemento": document.querySelector('#complemento').value,
        "bairro": document.querySelector('#bairro').value,
        "cep": document.querySelector('#cep').value,
        "cidade": document.querySelector('#cidade').value,
        "uf": document.querySelector('#estado').value
    }
};

function pegarDadosDb() {

    temp = JSON.parse(localStorage.getItem("db_client"));
}

function salvarDadosDb() {

    db_client = [];

    if (typeof temp === 'undefined' || temp === null) {
        db_client.push(data);
        localStorage.setItem("db_client", JSON.stringify(db_client));

    } else {
        temp.push(data);
        localStorage.setItem("db_client", JSON.stringify(temp));
    }

    alert('Cliente cadastrado!');
    document.getElementById("formCliente").reset();
}

function cadastrar() {

    pegarDadosForm();
    pegarDadosDb();
    salvarDadosDb();
}

function popularTabela() {

    pegarDadosDb();

    for (i = 0; temp.length - 1; i++) {
        console.log(temp[i].nome)
    };
}


//let convertData = JSON.stringify(data);
//let jsonData = JSON.parse(convertData)


// if (localStorage.idAtual) {
//     localStorage.idAtual = Number(localStorage.idAtual) + 1;
//     localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
// } else {
//     localStorage.idAtual = 1;
//     localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
// }
// alert('Cliente cadastrado!');
// document.getElementById("formCliente").reset();

// }