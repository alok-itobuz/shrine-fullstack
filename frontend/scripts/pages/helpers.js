export const carouselHandler = (currentCarouselItem, wrapper, translationFactor, unit = 'px') => {
    wrapper.style.transform = `translateX(-${translationFactor * currentCarouselItem}${unit})`
}

export const wideCarouselFunctionality = (length) => {
    const btnPrev = document.querySelector('.wide-carousel .btn-prev')
    const btnNext = document.querySelector('.wide-carousel .btn-next')

    const wrapper = document.querySelector('.wide-carousel .carousel-container .carousel-wrapper')
    const imageContainer = document.querySelector('.wide-carousel .carousel-container .carousel-wrapper .image-container')

    let currentCarouselItem = 0

    btnPrev.addEventListener('click', () => {
        if (currentCarouselItem === 0) return;

        currentCarouselItem--;
        carouselHandler(currentCarouselItem, wrapper, 100, '%')
    })
    btnNext.addEventListener('click', () => {
        if (currentCarouselItem === length - 1) return;

        currentCarouselItem++;
        carouselHandler(currentCarouselItem, wrapper, 100, '%')
    })

}