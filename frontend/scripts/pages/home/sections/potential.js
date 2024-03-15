import { sectionHeading } from "../../../components/main.js";

export default (sectionData) => {
    const { images, headingPrimary, descriptionPrimary, descriptionSecondary } = sectionData;
    return `
    <section id="potential" class="section-text-image container py-5">
        <div class="row m-0 p-0 justify-content-between">
            <div class="small-div col-12 col-sm-6 mx-auto mx-sm-0 p-2  pe-md-4 d-flex flex-column justify-content-between gap-4 order-1 order-sm-0">
                <div class="image-container w-100 rounded-2 p-0 m-0 overflow-hidden">
                    <img src=${images[0]?.url} alt=${images[0]?.alt} class="h-100 w-100 object-fit-cover object-center">
                </div>
                <p class="m-0 fs-small">&Prime;${descriptionSecondary}&Prime;</p>

                <button class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square">Read More</button>
            </div>
            <div class="large-div col-12 col-sm-6 mx-auto mx-sm-0 p-2  ps-md-4 d-flex flex-column justify-content-between gap-4">
                ${sectionHeading(headingPrimary)}
                <p class="m-0 fs-small">${descriptionPrimary}</p>
                <div class="image-container w-100 rounded-2 p-0 overflow-hidden ">
                    <img src=${images[1]?.url} alt=${images[1]?.alt} class="h-100 w-100 object-fit-cover object-center">
                </div>
            </div>
        </div>
    </section>
    `;
};
