//dizer que a variável calcular recebe o elemento HTML com o id "calcular" 
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //checar se as caixas estão preenchidas
    if (nome !== '' && altura !== '' && peso !== '') {

        //cálculo do IMC
        const valorIMC = (peso/(altura**2)).toFixed(1);
        
        let classificacao = '';
        
        //calcular classificação do IMC
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III.';
        }

        //texto do resultado
        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}`;
    
    //caso não esteja preenchido corretamente
    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}

//caso o usuário "click", executar "imc"
calcular.addEventListener('click', imc);