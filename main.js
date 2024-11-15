const cards = document.querySelectorAll('.img');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            img.classList.add('show');
        }
    });
});