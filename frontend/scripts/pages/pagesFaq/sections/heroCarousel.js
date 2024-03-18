import { sectionHeading, wideCarouselGenerator } from "../../../components/main.js"

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, images } = sectionData

    return `
        <section id="hero" class="section-text-image container pb-5">
            ${wideCarouselGenerator(images)}
            ${sectionHeading(headingPrimary, descriptionPrimary, 'column', 'mt-5')}
        </section>
    `
}