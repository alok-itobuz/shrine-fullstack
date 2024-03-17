import { shrineCardGenerator } from "./main.js"

export const statsCardsGenerator = ({ title, description }) => `
    <div class="col-6 col-md-3 m-0 p-2 ps-sm-4">
        <div class="h-100 w-100 text-center text-md-start">
            <h3 class="fs-xl font-roboto m-0">${title}</h3>
            <p class="fs-small m-0 mt-md-2">${description}</p>
        </div>
    </div>
`

// vision section
export const visionCardGenerator = (data) => `
    <div class="shrine-card-wrapper col-6 col-sm-4 p-2 ps-md-1 p-md-4 text-center">
    ${shrineCardGenerator(data, true)}
    </div>
`

// aboutus section
export const aboutusCardGenerator = ({ title, description }, i) => `
    <div class="card-wrapper p-3 p-md-2 py-3 position-relative">
        <span class="position-absolute d-inline-block start-0 top-0 font-roboto overflow-hidden d-flex align-items-center justify-content-center text-pink-orange">${i + 1}</span>
        <div class="h-100 w-100  d-flex flex-column justify-content-end px-1 ps-4 gap-1 py-2 py-md-0">
            <h3 class="fs-large font-roboto m-0">${title}</h3>
            <p class="fs-small m-0">${description}</p>
        </div>
    </div>
`