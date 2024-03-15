import { aboutusCardGenerator } from "../../../components/pages.js"

export default (sectionData, state) => {
    sectionData = {
        image: {
            url: './images/pages/hero/hero_church.png',
            alt: 'old church'
        },
        cards: [
            {
                title: 'Who Are we',
                description: 'A long established fact that a reader will be A long established fact that a reader.'
            },
            {
                title: 'What we believe',
                description: 'A long established fact that a reader will be A long established fact that a reader will be distracted.'
            },
            {
                title: 'our community',
                description: 'A long established fact that a reader will be A long established fact that a reader will be distracted.A long established fact that a reader.'
            },
        ]
    }
    const { image, cards } = sectionData
    return `
        <section id="aboutus" class="section-text-image container pb-5">
            <div class="row m-0 p-0 justify-content-between justify-content-xxl-center gap-xxl-4">
                <div class="image-container small-div col-12 col-md-6 m-0 p-0 p-2 mx-auto mx-sm-0 mt-3 mt-sm-0">
                    <div class="image-wrapper rectangle-circle h-100 mx-auto overflow-hidden">
                        <img src=${image?.url} alt=${image?.alt
        } class="h-100 w-100 object-fit-cover object-center">
                    </div>
                </div>
                <div class="text-container large-div col-12 col-md-6 row m-0 p-2 ps-md-4 d-flex flex-column justify-content-between align-items-center align-items-start gap-3 mx-auto mx-sm-0">
                    ${cards.map(aboutusCardGenerator).join("")}
                </div>
            </div>
        </section>
    `
}