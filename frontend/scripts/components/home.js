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

// members section
export const membersCardGenerator = ({ name, description, image, socialLinks: { instagram, google, youtube } }) => `
    <div class="card-wrapper col-12 col-sm-6 col-lg-3 p-2 p-lg-1">
        <div class="card h-100 w-100 d-flex flex-row flex-lg-column align-items-lg-center border-0 p-2 gap-2">
            <div class="image-container rectangle-circle h-100 overflow-hidden">
                <img src=${image} alt=${name} class="h-100 w-100 object-fit-cover object-center">
            </div>
            <div class="text-container d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-center justify-content-lg-start gap-2 mt-lg-2">
                <div class="round-icon-container rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                    <img src="./images/members/share_icon.svg" alt="" class="h-50 w-50 object-fit-contain object-center">
                </div>
                <span class="divider d-none d-lg-block h-75"></span>
                <div class="text d-flex flex-column justify-content-between gap-2">
                    <h4 class="m-0 fs-large font-roboto">${name}</h4>
                    <span class="fs-small">${description}</span>
                </div>
            </div>
            <div class="social-icons-container d-flex flex-column justify-content-center justify-content-center flex-lg-row gap-2">
                <a class="icon overflow-hidden" href=${instagram}>
                    <img src="./images/members/instagram.svg" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center " alt="instagram">
                </a>
                <a class="icon overflow-hidden" href=${google}>
                    <img src="./images/members/google.svg" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center " alt="google">
                </a>
                <a class="icon overflow-hidden" href=${youtube}>
                    <img src="./images/members/youtube.svg" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center " alt="youtube">
                </a>
            </div>
        </div>
    </div>
`

// events section
export const eventCardsGenerator = ({ image, date: { startDate, endDate }, location, duration: { startTime, endTime }, name, description }) => `
    <div class="carousel-card-wrapper m-0 p-2 px-sm-5 col-12 col-sm-8">
        <div class="carousel-card h-100 row m-0 rounded-2 overflow-hidden ">
            <div class="image-container h-100 col-4 overflow-hidden p-0">
                <img src=${image} alt=${name} class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center ">
            </div>
            <div class="text-container p-2 ps-md-4 col-8 d-flex flex-column align-items-start gap-2 justify-content-around">
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/calendar.svg" alt="calender icon" class="h-100 w-100 object-fit-contain object-center  d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${startDate}-${endDate}</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/location.svg" alt="location icon" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${location}</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/clock.svg" alt="clock icon" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${startTime}-${endTime}</span>
                </div>
                <h3 class="fw-semibold fs-large m-0 font-roboto">${name}</h3>
                <p class="m-0 fs-small">${description}</p>

                <button class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer  btn-square mt-sm-2">join now</button>
            </div>
        </div>
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