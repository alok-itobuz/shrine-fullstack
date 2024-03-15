export const carouselHandler = (currentCarouselItem, wrapper, translationFactor) => {
    wrapper.style.transform = `translateX(-${translationFactor * currentCarouselItem}px)`
}