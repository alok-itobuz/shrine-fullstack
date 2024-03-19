import { eventsSectionData, heroSectionData, ministrySectionData } from "./sectionData.js";
import { eventSection, heroSection, ministrySection } from "./sections/index.js";

export default (state) => {
    const main = document.querySelector("main");
    const elementArray = [
        heroSection(heroSectionData),
        ministrySection(ministrySectionData),
        eventSection(eventsSectionData, state.events)
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );
}