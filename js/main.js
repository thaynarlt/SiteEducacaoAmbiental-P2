// 1) obter os objetos JS - data.js
import problema from './dados-problemas.js';
import createCardView from './components/cards-problemas.js';

// Obter div de visualização dos cards
const containerProblemas = document.querySelector('#cards-problemas');

// 2) Para cada objeto JS, criar sua visualização
// 2.1) do arquivo InvestmentCard.js
// 3) Inserir essa visualização na div do Investment App
// 3.1) inserir no index.html
problema.forEach(
    (problema) => {
        const cardView = createCardView(problema);
        containerProblemas.insertAdjacentHTML('beforeend', cardView);
    }
);