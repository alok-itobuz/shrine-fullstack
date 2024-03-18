import { membersCardGenerator, sectionHeading } from "../../../components/main.js";

export default (sectionData, members) => {
    const { headingPrimary, descriptionPrimary } = sectionData

    return `
    <section id="members" class="container py-5 bg-white position-relative">
        <img src="./images/members/poster0.svg" alt="top poster" class="position-absolute start-50 translate-middle-x">
        ${sectionHeading(headingPrimary, descriptionPrimary)}
        <div class="row m-0 p-0 mt-4 mt-lg-5 cards-container justify-content-center">
            ${members?.map((data) => membersCardGenerator(data, '5-7', false)).join("")}
        </div>
        <img src="./images/members/poster1.svg" alt="top poster" class="position-absolute start-50 translate-middle-x">
    </section>
    `;
};
