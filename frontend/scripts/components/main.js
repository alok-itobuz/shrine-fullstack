
export const createCheckPoints = (content) => `
    <div class="wrapper d-flex align-items-center gap-2">
        <span class="checkbox rounded-circle d-flex align-items-center justify-content-center fs-medium">&check;</span>
        <span class="fs-small flex-grow-1">${content}</span>
    </div>
`

export const sectionHeading = (heading, description = null) => {
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
    <div class="heading-container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 gap-sm-5">
        <h2 class="section-heading fs-xl font-roboto flex-sm-grow-1 m-0">
            ${heading}
        </h2>
        <span class="fs-small">
            ${description}
        </span>
    </div>`
            : `
        <h2 class="section-heading fs-xl font-roboto m-0">${heading}</h2>
    `
        }
    `;
};

export const shrineCardGenerator = ({ url, alt, title, description, btnContent }) => `
    <div class="h-100 w-100 p-2 p-md-3 shrine-card d-flex flex-column gap-3 justify-content-center align-items-center">
        <div class="image-container h-25">
            <img src=${url} alt=${alt} class="h-100 w-100 object-fit-cover object-center">
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