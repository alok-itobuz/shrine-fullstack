import { sectionHeading } from "../../../components/main.js"

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, images } = sectionData
    return `
        <section id="aboutus" class="section-text-image container pb-5">
            <div class="row hero-image-container m-0 p-0 justify-content-center align-items-center">
                ${images.map(({ url, alt }) => `
                    <div class="col-12 col-sm-6 aspect-1-1 aspect-sm-none p-2">
                        <div class="image bg-danger h-100 w-100 rounded-2 overflow-hidden">
                            <img src=${url} alt=${alt} class="w-100 h-100 object-fit-cover" />
                        </div>
                    </div>
                `).join('')}
            </div>
            ${sectionHeading(headingPrimary, descriptionPrimary, 'column', 5)}
        </section>
    `
}