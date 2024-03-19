import { primaryCardGenerator, sectionHeading } from "../../../components/main.js"

export default (sectionData, events) => {

    const { headingPrimary, descriptionPrimary } = sectionData
    return `
        <section id="hero" class="section-text-image container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary, 'row', '')}

        <div class="row m-0 p-0 event-cards-container mt-5">
            ${events?.map(event => primaryCardGenerator(event, 'v', 'col-12 col-sm-6 col-md-4', 'p-2 p-md-3', `#pages/events/${event.id}`)).join("")}
        </div>
        </section>
    `}