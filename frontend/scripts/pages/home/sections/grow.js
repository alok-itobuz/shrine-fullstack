import { createCheckPoints } from "../../../components/main.js";

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, checkPoints, images } = sectionData

    return `
    <section id="grow" class="container py-5">
        <div class="row m-0 p-0 h-100">
            <div class="text-container col-12 col-sm-8 h-100 row m-0 p-0 d-flex flex-column gap-4">
                <h2 class="section-heading fs-xl font-roboto flex-sm-grow-1 m-0 text-capitalize fs-xl">${headingPrimary}</h2>
                <p class="m-0 p-0 fs-small">${descriptionPrimary}</p>

                <div class="checkpoints d-flex flex-column gap-3">
                    ${checkPoints?.map(createCheckPoints).join("")}
                </div>
                <div class="btn-image-container d-flex align-items-center  align-items-sm-start justify-content-between">
                    <button class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square mt-sm-2">Read More</button>
                    <div class="image-container rounded-2 overflow-hidden ">
                        <img src=${images[0]?.url} alt=${images[0].alt} class="h-100 w-100 object-fit-cover object-center">
                    </div>
                </div>
            </div>
            <div class="image-container col-12 col-sm-4 m-0 p-0 mt-3 mt-sm-0 p-sm-2 pb-sm-0">
                <div class="h-100 w-100 bg-primary image rounded-2 overflow-hidden">
                    <img src=${images[1].url} alt=${images[1].alt} class="h-100 w-100 object-fit-cover object-center">
                </div>
            </div>
        </div>
    </section>
    `;
};
