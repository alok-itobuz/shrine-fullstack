import { wideCarouselFunctionality } from "../helpers.js";
import { heroSectionData, membersSectionData } from "./sectionData.js";
import { heroSection, membersSection } from "./sections/index.js";

export default (state) => {
    const main = document.querySelector("main");
    const elementArray = [
        heroSection(heroSectionData),
        membersSection(membersSectionData, state.members)
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );


    wideCarouselFunctionality(heroSectionData.images.length)
}