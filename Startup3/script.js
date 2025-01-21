const carousel = document.querySelector('.hero__carousel');
const cardWidth = carousel.querySelector('.hero__card').offsetWidth;
const arrowBtns = document.querySelectorAll('.hero button')

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log('clicked')
        console.log(carousel)
        console.log(cardWidth)
        carousel.scrollLeft += btn.id === 'left' ?  -cardWidth : cardWidth
    });
})