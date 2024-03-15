import { satisfactionCardGenerator } from "../../../components/home.js";
import { sectionHeading } from "../../../components/main.js";

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary, cards } = sectionData

    return `
    <section id="satisfaction" class="container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary)}

        <div class="slider-container position-relative mt-4 ">
            <div class="carousel-wrapper row flex-nowrap overflow-x-scroll">
                ${cards?.map(satisfactionCardGenerator).join("")}
            </div>
        </div>
    </section>
    `;
};
