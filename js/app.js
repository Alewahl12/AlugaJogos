function alterarStatus(numeroId){
    let jogo = document.getElementById(`game-${numeroId}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let imagem = jogo.querySelector('.dashboard__item__img');
    



    if (botao.textContent === 'Alugar'){
        if (confirm('Voce realmente deseja alugar o jogo?')){
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            quantidadeJogosAlugados ++;
            imprimirQuantidadeJogosAlugados();
            
        }else{
            return;
        }
        
    } else {
        if (confirm('Voce realmente deseja devolver o jogo?')){
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            quantidadeJogosAlugados --;
            imprimirQuantidadeJogosAlugados();
        }else{
            return;
        }
    }
}

function imprimirQuantidadeJogosAlugados(){
    console.log(`Quantidade de jogos alugados: ${quantidadeJogosAlugados}`);
}

let quantidadeJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;