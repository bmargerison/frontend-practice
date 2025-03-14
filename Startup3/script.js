const carousel = document.querySelector('.hero__carousel');
let cardWidth = carousel.querySelector('.hero__card').offsetWidth;
const radioBtns = document.querySelectorAll('.hero__buttons input');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
let currentCard = 0;


window.addEventListener("resize", (event) => {
    cardWidth = carousel.querySelector('.hero__card').offsetWidth;
    carousel.scrollLeft = `${currentCard * cardWidth}`;
});

leftArrow.addEventListener("click", () => {
    for (var b = 0; b < radioBtns.length; ++b) {
        if (radioBtns[b].checked == true) {
            if (radioBtns[b].id.slice(-1) > 0) {
                let newCheckedId = Number(radioBtns[b].id.slice(-1)) - 1;
                currentCard = newCheckedId - 1;
                document.querySelector(`#radio-${newCheckedId}`).checked = true;
                carousel.scrollLeft -= cardWidth;
                break;
            }
        }
    }
})

rightArrow.addEventListener("click", () => {
    for (var b = 0; b < radioBtns.length; ++b) {
        if (radioBtns[b].checked == true) {
            console.log(radioBtns[b]);
            if (radioBtns[b].id.slice(-1) <= radioBtns.length) {
                let newCheckedId = Number(radioBtns[b].id.slice(-1)) + 1;
                currentCard = newCheckedId - 1;
                document.querySelector(`#radio-${newCheckedId}`).checked = true;
                carousel.scrollLeft += cardWidth;
                break;
            }
        }
    }
})

radioBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft = cardWidth * (btn.id.slice(-1) - 1);
        currentCard = btn.id.slice(-1) - 1;
    });
})
