
import { primaryCardGenerator, sectionHeading } from "../../../components/main.js";

export default (sectionData, events) => {
    const { headingPrimary, descriptionPrimary } = sectionData
    return `
    <section id="events" class="container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary)}
        <div class="carousel-container w-100 overflow-x-hidden   mt-4 mt-lg-5">
            <div class="row m-0 p-0 carousel-wrapper flex-nowrap">
                ${events?.map((data) => primaryCardGenerator(data, 'h', 'col-12 col-sm-8')).join("")}
            </div>
        </div>
        <div class="carousel-buttons-container mt-3 mt-lg-4 d-flex align-items-center justify-content-center gap-2 gap-lg-4">
            <button class="btn-event-carousel btn-left d-flex align-items-center justify-content-center rounded-circle border-0">&lt;</button>
            <button class="btn-event-carousel btn-right d-flex align-items-center justify-content-center rounded-circle border-0">&gt;</button>
        </div>
    </section>
    `;
};
