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

//localStorage.setItem("id", convertData);

    if (localStorage.idAtual) {
        localStorage.idAtual = Number(localStorage.idAtual) + 1;
        localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
    } else {
        localStorage.idAtual = 1;
        localStorage.setItem(`cliente_id: ${localStorage.idAtual}`, convertData);
      }
      alert('Cliente cadastrado!');
      document.getElementById("formClientes").reset();

// if (localStorage.clienteId) {
//     localStorage.clienteId = Number(localStorage.clienteId) + 1;
   
//   } else {
//     localStorage.clienteId = 1;
//   }
    
    //console.log(convertData);

}




