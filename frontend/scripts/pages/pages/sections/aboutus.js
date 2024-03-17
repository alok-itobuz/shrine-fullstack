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
    const happyPrayers = 26
    const { image, cards } = sectionData
    return `
        <section id="aboutus" class="section-text-image container pb-5">
            <div class="row m-0 p-0 justify-content-between justify-content-xxl-center gap-xxl-4">
                <div class="image-container small-div col-12 col-md-6 m-0 p-0 p-2 mx-auto mx-sm-0 mt-3 mt-sm-0">
                    <div class="image-wrapper rectangle-circle h-100 mx-auto position-relative">
                        <div class="image h-100 w-100 overflow-hidden rectangle-circle">
                            <img src=${image?.url} alt=${image?.alt
        } class="h-100 w-100 object-fit-cover object-center">
                        </div>
                        <div class="prayers-circle position-absolute bottom-0 end-0 p-3 p-sm-4 m-0 rounded-circle border border-5 border-white bg-danger d-flex flex-column justify-content-center align-items-center gap-1 bg-deep-pink">
                            <h3 class="fs-xl font-roboto m-0 text-white">${happyPrayers}K+</h3>
                            <span class="fs-small m-0 text-white">Happy Prayers</span>
                        </div>
                    </div>
                </div>
                <div class="text-container large-div col-12 col-md-6 row m-0 p-2 ps-md-4 d-flex flex-column justify-content-between align-items-center align-items-start gap-3 mx-auto mx-sm-0">
                    ${cards.map(aboutusCardGenerator).join("")}
                </div>
            </div>
        </section>
    `
}