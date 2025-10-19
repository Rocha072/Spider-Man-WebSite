


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


function selectCarouselItem(selectedButtonItem){
    const selectedItem = selectedButtonItem.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem)-1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;

    const activeButton = document.querySelector('.s-controller__button--active');
    activeButton.classList.remove('s-controller__button--active');
    selectedButtonItem.classList.add('s-controller__button--active');
}