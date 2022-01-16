const imagem1 = document.getElementById('personagem1');
const imagem2 = document.getElementById('personagem2');
const imagem3 = document.getElementById('personagem3');
const botao = document.querySelector('button');
const nomeDoPersonagem1 = document.getElementById('nome1');
const nomeDoPersonagem2 = document.getElementById('nome2');
const nomeDoPersonagem3 = document.getElementById('nome3');
const especie1 = document.getElementById('species1');
const especie2 = document.getElementById('species2');
const especie3 = document.getElementById('species3');
const condicao1 = document.getElementById('status1');
const condicao2 = document.getElementById('status2');
const condicao3 = document.getElementById('status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random()* 671);
}

traduzirCondicao = (data) => {
    if (data.status == 'unknown') {
        return 'Não sei' ;
    } else if (data.status == 'alive') {
        return 'Sim' ;
    } else {
        return 'Não. Está morto' ;
    }
}

pegarPersonagem1 = () =>{
    let numeroAleatorio1 = gerarValorAleatorio();
    let numeroAleatorio2 = gerarValorAleatorio();
    let numeroAleatorio3 = gerarValorAleatorio();
}