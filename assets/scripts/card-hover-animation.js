


function handleMouseEnter(){
    this.classList.add('s-card--hovered');

    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered')
    document.body.id = '';
}


function addEventListenersToCards(){
    const cardElements = Array.from(document.getElementsByClassName('s-card'));
    cardElements.forEach(card => {
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    });
}


document.addEventListener("DOMContentLoaded", addEventListenersToCards);