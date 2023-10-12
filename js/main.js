// 1) obter os objetos
import problemas from './dados-problemas.js';
import createCardView from './components/cards-problemas.js';

// Obter div de visualização dos cards
const containerProblemas = document.querySelector('#cards-problemas');


const renderProblemas = (problemas) => {
    containerProblemas.innerHTML = problemas
      .map((problema) => createCardView(problema))
      .join('');
};


  
renderProblemas(problemas);