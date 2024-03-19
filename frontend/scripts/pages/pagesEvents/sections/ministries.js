import { shrineCardGenerator } from "../../../components/main.js"

export default (sectionData) => {
    const { cards } = sectionData
    return `
        <section id="hero" class="section-text-image container py-5">
            <div class="row m-0 p-0 justify-content-center justify-content-md-between  justify-content-xxl-center aspect-sm-3-1">
                ${cards.map((cardData) => `
                    <div class="col-10 col-sm-6 col-md-4 p-2 ministry-card-wrapper aspect-10-13">
                        ${shrineCardGenerator(cardData, true)}
                    </div>
                `).join("")}
            </div>
        </section>
    `
}