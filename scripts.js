function cadastrar() {

    
    
let nome = document.querySelector('#nome').value
let email = document.querySelector('#email').value
let telefone = document.querySelector('#telefone').value
let cpf = document.querySelector('#cpf').value
let endereco = document.querySelector('#endereco').value
let numero = document.querySelector('#numero').value
let complemento = document.querySelector('#complemento').value
let bairro = document.querySelector('#bairro').value
let cep = document.querySelector('#cep').value
let cidade = document.querySelector('#cidade').value
let uf = document.querySelector('#estado').value

let data = {

    nome,
    email,
    telefone,
    cpf,
    endereco,
    numero,
    complemento,
    bairro,
    cep,
    cidade,
    uf
}

let convertData = JSON.stringify(data);
    
    console.log(convertData);

}




