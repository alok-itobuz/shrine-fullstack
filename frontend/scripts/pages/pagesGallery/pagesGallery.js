import { API_URL } from "../../constants.js";
import { fetchAndStore } from "../../states.js";
import { heroSectionData } from "./sectionData.js";
import { gallerySection, heroSection } from "./sections/index.js";

export default async (state) => {
    const main = document.querySelector("main");

    const currentGalleryItem = window.location.hash.split('/')
    let activeLink = 'all';
    if (!(currentGalleryItem.length === 2 || currentGalleryItem.at(-1) === ''))
        activeLink = currentGalleryItem.at(-1)

    await fetchAndStore(`${API_URL}/gallery/${activeLink}`, 'gallery')

    const elementArray = [
        heroSection(heroSectionData),
        gallerySection(state.gallery?.slice(0, 9))
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );
}