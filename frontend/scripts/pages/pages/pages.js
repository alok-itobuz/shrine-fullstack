import { aboutusSection, heroSection, statsSection, visionSection } from "./sections/index.js";
import { heroSectionData, visionSectionData } from './sectionData.js'

export default (state) => {
    const main = document.querySelector("main");

    const elementArray = [
        heroSection(heroSectionData),
        statsSection(state.stats),
        visionSection(visionSectionData),
        aboutusSection()
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );
}