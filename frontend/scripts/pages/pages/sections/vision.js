import { sectionHeading } from "../../../components/main.js"
import { visionCardGenerator } from "../../../components/pages.js"

export default (sectionData, state) => {
    const { headingPrimary, descriptionPrimary, cards } = sectionData
    return `
        <section id="vision" class="container py-5">
            ${sectionHeading(headingPrimary, descriptionPrimary)}
    
            <div class="vision-container mt-4 row m-0 p-0 justify-content-center">
                ${cards.map(visionCardGenerator).join("")}
            </div>
        </section>
    `
}