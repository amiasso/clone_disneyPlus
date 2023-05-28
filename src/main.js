document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
   

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAsAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAsAbas() {
    const tabsConatiner = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsConatiner.length; i++) {
        tabsConatiner[i].classList.remove('shows__list--is-active');
    }
}