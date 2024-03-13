import { membersCardGenerator } from "../../../components/home.js";
import { sectionHeading } from "../../helpers.js";

export default (sectionData, members) => {
    const { headingPrimary, descriptionPrimary } = sectionData

    return `
    <section id="members" class="container py-5 bg-white position-relative">
        <img src="./images/members/poster0.svg" alt="top poster" class="position-absolute start-50 translate-middle-x">
        ${sectionHeading(headingPrimary, descriptionPrimary)}
        <div class="row m-0 p-0 mt-4 mt-lg-5 cards-container justify-content-center">
            ${members.map(membersCardGenerator).join("")}
        </div>
        <div class="horizontal-row d-flex align-items-center  gap-3 gap-md-5 ">
            <span class="flex-grow-1"></span>
            <a href="#members" class="m-0 p-0 text-decoration-none rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square mt-sm-2">ALL TEAM MEMBERS</a>
            <span class="flex-grow-1"></span>
        </div>
        <img src="./images/members/poster1.svg" alt="top poster" class="position-absolute start-50 translate-middle-x">
    </section>
    `;
};
