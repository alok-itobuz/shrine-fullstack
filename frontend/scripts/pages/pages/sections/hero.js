import { createCheckPoints, sectionHeading } from "../../../components/main.js"

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, image, checkPoints } = sectionData
    return `
        <section id="hero" class="section-text-image container pb-5">
            <div class="row m-0 p-0 justify-content-between justify-content-xxl-center gap-xxl-4">
                <div class="image-container small-div col-12 col-sm-6 m-0 p-0 p-2 mx-auto mx-sm-0 mt-3 mt-sm-0">
                    <div class="image-wrapper rounded-3 h-100 mx-auto overflow-hidden">
                        <img src=${image?.url} alt=${image?.alt
        } class="h-100 w-100 object-fit-cover object-center">
                    </div>
                </div>
                <div class="text-container large-div col-12 col-sm-6 m-0 p-2 ps-md-4 d-flex flex-column justify-content-between align-items-start gap-3 mx-auto mx-sm-0">
                    ${sectionHeading(headingPrimary)}
                    <p class="fs-small m-0">${descriptionPrimary}</p>
                    <div class="checkpoints d-flex flex-column gap-3">
                        ${checkPoints?.map(createCheckPoints).join("")}
                    </div>
                    <button class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square">JOIN US</button>
                </div>
            </div>
        </section>
    `
}