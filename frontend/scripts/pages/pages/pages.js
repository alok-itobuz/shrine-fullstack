import { aboutusSection, heroSection, statsSection, visionSection } from "./sections/index.js";
import { heroSectionData, statsSectionData, visionSectionData } from './sectionData.js'

export default (state) => {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const elementArray = [
        heroSection(heroSectionData),
        statsSection(statsSectionData),
        visionSection(visionSectionData),
        aboutusSection()
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );
}