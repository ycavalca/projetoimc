let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')

let arrPessoa = []

function cadastrar(){
  
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let categoria = document.getElementById('categoria').value
    //----------------------------------------------------------
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    //----------------------------------------------------------
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,
        imc: calculaIMC(peso, altura),
        categoria: categoriaIMC(calculaIMC(peso, altura))
    }
    arrPessoa.push(pessoa)
    console.log(arrPessoa)
    imprimir()

    let imc = calculaIMC(peso,altura)
    let categoriaImc = categoriaIMC(imc)
    console.log(imc, categoriaImc);


    //resultado.innerHTML = "NOME: " + nome + " SOBRENOME: " + sobrenome + "."

   
}



function calculaIMC(peso, altura){
    // let imc = p / (altura * altura)
    // let imc = p / Math.pow(altura, 2)
    return peso / Math.pow(altura, 2)
    
}


function categoriaIMC(imc){
    if(imc <= 18.5){
        return 'Abaixo Normal'
    }else if(imc <= 24.9){
        return 'Normal'
    }else if(imc <= 29.9){
        return 'Sobrepeso'
    }else if(imc <= 34.9){
        return 'Obesidade grau I'
    }else if(imc <=39.9 ){
        return 'Obesidade grau II'
    }else{
        return 'Obesidade grau III'

    }
  
    }

    function imprimir(){

        resultado.innerHTML = ''

        for(let i = 0; i <= arrPessoa.length; i++){

        resultado.innerHTML += `
        <tr>
        <td> ${arrPessoa[i].nome} ${arrPessoa[i].sobrenome}</td>
        <td> ${arrPessoa[i].altura}</td>
        <td> ${arrPessoa[i].peso}</td>
        <td> ${arrPessoa[i].imc.toFixed(2)}</td>
        <td> ${arrPessoa[i].categoria}</td>               
        </tr>
    `  
        }
}

btn.addEventListener('click',cadastrar)