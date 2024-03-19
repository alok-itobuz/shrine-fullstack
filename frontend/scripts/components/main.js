
export const createCheckPoints = (content) => `
    <div class="wrapper d-flex align-items-center gap-2">
        <span class="checkbox rounded-circle d-flex align-items-center justify-content-center fs-medium">&check;</span>
        <span class="fs-small flex-grow-1">${content}</span>
    </div>
`

export const sectionHeading = (heading, description = null, flexDirection = "row", margin = 'mt-4') => {
    heading = heading.trim();
    description && (description = description.trim());

    if (heading.length > 17 && heading.split(" ").length > 2) {
        let c = 0, curr = Math.trunc(heading.length / 2)

        while (curr - c > 0 && curr + c < heading.length) {
            if (heading[curr + c] == ' ') {
                heading = heading.slice(0, curr + c) + "<br />" + heading.slice(curr + c + 1);
                break;
            } else if (heading[curr - c] == ' ') {
                heading = heading.slice(0, curr - c) + "<br />" + heading.slice(curr - c + 1);
                break;
            }
            c++
        }
    }

    return `
    ${!!description
            ? `
    <div class="heading-container d-flex flex-column flex-sm-${flexDirection} ${flexDirection === 'row' ? 'align-items-sm-center' : ''} justify-content-between gap-3 gap-sm-5 ${margin}">
        <h2 class="section-heading fs-xl font-roboto flex-sm-grow-1 m-0">
            ${heading}
        </h2>
        <span class="fs-small ${flexDirection === 'row' ? 'mw' : ''}">
            ${description}
        </span>
    </div>`
            : `
        <h2 class="section-heading fs-xl font-roboto m-0">${heading}</h2>
    `
        }
    `;
};

export const shrineCardGenerator = ({ url, alt, title, description, btnContent }, imgRounded = false) => `
    <div class="h-100 w-100 p-2 p-md-3 shrine-card d-flex flex-column gap-3 justify-content-center align-items-center">
        <div class="image-container h-25 d-flex align-items-center justify-content-center ${imgRounded ? 'rounded-circle bg-white' : ''}">
            <img src=${url} alt=${alt} class="h-${imgRounded ? 50 : 100} w-${imgRounded ? 50 : 100} object-fit-cover object-center">
        </div>
        <h3 class="fs-large m-0 text-capitalize font-roboto fw-semibold">${title}</h3>
        <span class="fs-small text-center">${description}</span>
        ${btnContent ? `
            <button class="fs-small text-uppercase btn-square d-flex align-items-center justify-content-center border-0 bg-transparent gap-2">
                <span class="text-content">${btnContent}</span> 
                <span class="btm-arrow rounded-circle d-flex align-items-center justify-content-center bg-danger text-white h-100">&gt;</span>
            </button>` : ''
    }
    </div>
`


export const membersCardGenerator = ({ name, description, image, socialLinks: { instagram, google, youtube } }, aspectRatio, isRectangleCircle = true) => `
    <div class="members-card-wrapper col-12 col-sm-6 col-lg-3 p-2 p-lg-1">
        <div class="card h-100 w-100 d-flex flex-row flex-lg-column align-items-lg-center border-0 p-2 gap-2">
            <div class="image-container ${isRectangleCircle ? 'rectangle-circle' : ''} aspect-${aspectRatio} h-100 overflow-hidden">
                <img src=${image} alt=${name} class="h-100 w-100 object-fit-cover object-center">
            </div>
            <div class="text-container d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-center justify-content-lg-start gap-2 mt-lg-2">
                <button class="round-icon-container rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                    <img src="./images/members/share_icon.svg" alt="" class="h-50 w-50 object-fit-contain object-center">
                </button>
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


export const wideCarouselGenerator = (images) => `
    <div class="wide-carousel carousel-btn-container position-relative">
        <div class="carousel-container h-100 rounded-2 overflow-hidden">
            <div class="carousel-wrapper h-100 row m-0 p-0 flex-nowrap">
                ${images.map(image => `
                    <div class="image-container col-12 m-0 p-0">
                        <img src=${image.url} alt=${image.alt} class="h-100 w-100 object-fit-cover bg-white"/>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="buttons-container d-flex flex-column align-items-center justify-content-center gap-0 position-absolute end-0 top-50 translate-middle-y">
            <button class="btn-prev border-0 bg-deep-pink text-white">&lt;</button>
            <button class="btn-next border-0 bg-black text-white">&gt;</button>
        </div>
    </div>
`


export const blackWhiteCardTextsGenerator = (name, description, btnContent, href) => `
    <h3 class="fw-semibold fs-large m-0 font-roboto">${name}</h3>
    <p class="m-0 fs-small">${description}</p>
    <a href=${href} class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white  hover-cuursor-pointer  btn-square mt-sm-2 text-decoration-none">${btnContent}</a>
`

export const primaryCardGenerator = ({ image, date: { startDate, endDate }, location: { name: locationName }, duration: { startTime, endTime }, name, description }, alignment = 'v', wrapperCol = 'col-12 col-sm-6', p = 'p-2 px-sm-5', href) => `
    <div class="carousel-card-wrapper ${alignment === 'h' ? '' : 'aspect-5-7'} m-0 ${p} ${wrapperCol}">
        <div class="carousel-card h-100 row m-0 rounded-2 overflow-hidden border border-2 boder-black">
            <div class="image-container ${alignment === 'h' ? 'h-100 col-4' : 'h-50 col-12'} overflow-hidden p-0">
                <img src=${image} alt=${name} class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center ">
            </div>
            <div class="text-container p-2 ps-md-4  ${alignment === 'h' ? 'col-8' : 'h-50 col-12'} d-flex flex-column align-items-start gap-2 justify-content-around">
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
                    <span class="fs-small">${locationName}</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/clock.svg" alt="clock icon" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${startTime}-${endTime}</span>
                </div>
                ${blackWhiteCardTextsGenerator(name, description, 'join now', href)}
            </div>
        </div>
    </div>
`