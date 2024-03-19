import { shrineCardGenerator } from './main.js'

// Introduction section
export const introCardsGenerator = ({ heading, paragraph, url, alt }) => {
    return `
    <div class="introduction-card d-flex gap-2">
        <div class="image-container rounded-circle  btn-circle overflow-hidden">
          <img src=${url} alt=${alt ?? "alternate alt"
        } class="rounded-3 object-fit-cover h-100 w-100 object-center"></div>
        <div class="text-container d-flex flex-column gap-2">
            <h3 class="m-0 p-0 roboto-serif fs-large font-roboto ">
                ${heading}
            </h3>
            <span class="fs-small">
                ${paragraph}
            </span>
        </div>
    </div>
    `;
};

export const introImage = ({ url, alt }) => `
    <div class="image rounded-3 overflow-hidden">
        <img src=${url} alt=${alt} class="rounded-3 object-fit-cover h-100 w-100 object-center">
    </div>
`;

export const circularImageJoined = ({ url, alt }) => `
    <div class="image-div h-50 position-relative ">
        <div class="image-container position-absolute start-50 top-50 rounded-circle translate-middle overflow-hidden">
        <img src=${url} alt=${alt} class="rounded-3 object-fit-cover h-100 w-100 object-center">
        </div>
    </div>
`;

// satisfaction section
export const satisfactionCardGenerator = (data) => `
    <div class="satisfaction-card-wrapper shrine-card-wrapper col-6 col-sm-4 col-md-3 p-2">
        ${shrineCardGenerator(data)}
    </div>
`


// articles section
export const articlesCardGenerator = ({ title, description, image, duration }) => `
    <div class="crousel-card-wrapper m-0 p-2 col-12 col-sm-6 col-lg-4">
        <div class="carousel-card h-100 w-100 d-flex flex-column rounded-2 overflow-hidden mx-auto mx-sm-0">
            <div class="image-container w-100 flex-grow-1 overflow-hidden">
                <img src=${image} alt=${title} class="h-100 w-100 object-fit-cover object-center">
            </div>
            <div class="text-container px-3 py-2 d-flex flex-column justify-content-center gap-2 flex-grow-1">
                <h3 class="fs-large m-0 fw-semibold font-roboto">${title}</h3>
                <p class="m-0 fs-small">${description}</p>
                <div class="author-container d-flex align-items-center justify-content-start gap-1">
                    <div class="image rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                        <img src="./images/articles/author_dark.png" alt="" class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center">
                    </div>
                    <span class="hr"></span>
                    <span class="fs-small">${duration} min read</span>
                </div>
            </div>
        </div>
    </div>
`