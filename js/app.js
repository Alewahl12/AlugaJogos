function alterarStatus(numeroId){
    let jogo = document.getElementById(`game-${numeroId}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let imagem = jogo.querySelector('.dashboard__item__img');
    



    if (botao.textContent === 'Alugar'){
        let confirmarAcao = confirm('Voce deseja realmente alugar o jogo?')
        if (confirmarAcao == true){
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
        }else{
            return;
        }
        
    } else {
        let confirmarAcao = confirm('Voce deseja realmente devolver o jogo?');
        if (confirmarAcao == true){
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
        }else{
            return;
        }
    }
}