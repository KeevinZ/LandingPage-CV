
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  function SobreposicaoNosCards() {
    const Desktop = window.innerWidth >= 768;

    cards.forEach(card => {
      const antigo = card.querySelector('.card-overlay');
      if (antigo) card.removeChild(antigo);

      if (Desktop) {
        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';
        overlay.innerHTML = '<h3>Ir para o Projeto</h3>';

        card.addEventListener('mouseenter', () => card.classList.add('flip'));
        card.addEventListener('mouseleave', () => card.classList.remove('flip'));

        card.appendChild(overlay);
      } else {
        card.classList.remove('flip');
      }
    });
  }

  SobreposicaoNosCards();
  window.addEventListener('resize', SobreposicaoNosCards);
});
