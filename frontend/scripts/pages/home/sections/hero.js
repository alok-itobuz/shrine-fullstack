const bodyWrapper = ({ url, alt, title, description, button }) => `
    <div class="energy-body-wrapper col-12 p-2 py-md-0">
        <div class="semi-circle energy-body d-flex flex-column align-items-center justify-content-center p-2 py-md-0">
            <div class="image-container h-50">
                <img src=${url} alt=${alt} class="h-100 object-fit-contain ">
            </div>
            ${title && description ? `
            <div class="text-container h-25 d-flex flex-column align-items-center justify-content-center gap-2">
                ${title ? `<h3 class="m-0 p-0 font-roboto text-center fs-medium">${title}</h3>` : ""}
                ${description ? `<span class="text-center fs-small">${description}</span>` : ""}
            </div>
            ` : ''}
            ${!!button ? `<button class="btn-${button} btn-circle position-absolute rounded-circle border-0"></button>` : ''}
        </div>
    </div>
`;
export default () => {
    const cardsData = [
        {
            url: "./images/hero/girl_reading.svg",
            alt: "girl reading book",
            title: "Energise your life",
            description: "Long established fact that",
            button: null
        },
        {
            url: "./images/hero/flower.svg",
            alt: "flower",
            title: "Faith in Action,<br> Love in Motion",
            button: 'arrow'
        },
        {
            url: "./images/hero/spiritual.svg",
            alt: "spiritual",
            button: 'video'
        },
    ];

    return `
    <section id="hero" class="container-fluid">
        <div class="container py-2 py-md-5">
            <div class="row p-0 m-0 position-relative pt-lg-5">
                <div class="hero-energy col-6 col-md-4 row m-0 p-0">
                    ${cardsData?.slice(0, 2)?.map(bodyWrapper).join("")}
                </div>
                <div class="jesus-image-container col-md-4 d-md-block position-absolute p-0  h-75 d-md-flex flex-column">
                    <img src="./images/hero/jesus.svg" alt="jesus"
                        class="h-100 w-100 object-fit-contain d-flex align-items-center justify-content-center overflow-x-visible ">
                    <div class="semi-circle h-100 w-100 d-none d-md-block mt-auto"></div>
                </div>
                <div class="hero-spirituality col-6 col-md-4 row m-0 p-0">
                    ${bodyWrapper(cardsData[2])}
                    <div class="energy-body-wrapper col-12 py-md-0">
                        <div class="semi-circle energy-body d-flex flex-column align-items-center justify-content-center p-2 py-md-0">
                            <div class="image-container h-50">
                                <img src="./images/hero/girl_reading.svg" alt="girl reading book" class="h-100 object-fit-contain ">
                            </div>
                            <div class="text-container h-25 d-flex flex-column align-items-center justify-content-center gap-2">
                                <h3 class="m-0 p-0 font-roboto text-center fs-medium">Energise your life</h3>
                                <span class="text-center fs-small">Long established fact that</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row p-0 m-0 py-3 bg-white position-relative">
                <button class="btn-hero-donation border-0 rounded-circle align-items-center justify-content-center position-absolute end-0 top-0"></button>
                <div class="col-12 col-md-4 p-2 d-flex align-items-center justify-content-center">
                    <p class="m-0 p-0 font-roboto fw-semibold">
                        <span class="fst-italic fs-large">Faith</span> in Action,<br> Love in Motion
                    </p>
                </div>
                <div class="col-12 col-md-4 p-2 d-flex align-items-center justify-content-center">
                    <span class="fs-small">Long established fact that a reader will be distracted by the readable content of a page when.Long established fact that a reader will be distracted by the readable content.</span>
                </div>
                <div class="col-12 col-md-4 p-2 d-flex align-items-center justify-content-center d-flex flex-column justify-content-center gap-1">
                    <h3>4.8/4</h3>
                    <span class="fs-small">Explore our trust <br>score & customer.</span>
                </div>
            </div>
        </div>
    </section>
    `;
};
