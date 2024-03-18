import { sectionHeading, wideCarouselGenerator } from "../../../components/main.js"

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, images } = sectionData
    return `
        <section id="hero" class="section-text-image container pb-5">
            ${sectionHeading(headingPrimary, descriptionPrimary, 'column', 'mb-5')}
            ${wideCarouselGenerator(images)}
        </section>
    `
}