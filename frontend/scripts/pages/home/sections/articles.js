import { articlesCardGenerator } from "../../../components/home.js";
import { sectionHeading } from "../../../components/main.js";



export default (sectionData, articles) => {
    const { headingPrimary, descriptionPrimary, headingSecondary, descriptionSecondary } = sectionData

    const featuredArticle = articles?.find(article => article.featured)
    if (!featuredArticle) return '';
    const { title, image, description, publishedAt } = featuredArticle

    return `
    <section id="articles" class="container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary)}
        <div class="row m-0 p-0 mt-3 article-contents-container">
            <div class="col-12 col-sm-7 position-relative p-3 rounded-2 overflow-hidden ">
                <img src=${image} alt=${title}
                    class="article-main-bg h-100 w-100 position-absolute object-fit-cover start-50 top-50 translate-middle">
                <div class="articles-card h-100 d-flex flex-column gap-3 align-items-start  justify-content-center bg-white p-3 rounded-2">
                    <span class="fs-small fw-semibold text-uppercase">FEATURED</span>
                    <h3 class="font-roboto fw-semibold fs-large">${title}</h3>
                    <p class="m-0 fs-small">${description}</p>
                    <span class="fs-small">${publishedAt}</span>
                </div>
            </div>
            <div class="col-12 col-sm-5 p-0 py-2 p-sm-0 ps-sm-4">
                <form class="form-subscribe m-0 rounded-2 d-flex flex-column gap-3 p-2 ps-md-3 border border-1">
                    <h3 class="m-0 fs-large font-roboto">${headingSecondary}</h3>
                    <p class="m-0 fs-small">${descriptionSecondary}</p>
                    <input type="email" placeholder="Enter your email" class="input-subscribe-email fs-small p-2 rounded-2 border-1 ">
                    <button type="submit" class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square mt-sm-2">Subscribe</button>
                    <p class="m-0 d-flex gap-2 ">
                        <input type="checkbox" class="subscribe-checkbox" id="subscribe-checkbox">
                        <label for="subscribe-checkbox" class="fs-small">I agree that my sub minted data is being collected and stored</label>
                    </p>
                </form>
            </div>
        </div>
        <div class="carousel-container w-100 m-0 mt-3 overflow-x-scroll ">
            <div class="row m-0 p-0 carousel-wrapper flex-nowrap">
                ${articles?.slice(0, 3)?.map(articlesCardGenerator).join(" ")}
            </div>
        </div>
        <div class="carousel-buttons-container mt-3  d-flex align-items-center justify-content-center justify-content-sm-end gap-2 ">
            <button class="btn-current-page d-flex align-items-center justify-content-around rounded-2 border-0 fs-small ">1</button>
            <button class="btn-next-page d-flex align-items-center justify-content-around rounded-2 border-0 fs-small ">2</button>
            <button class="btn-arrow d-flex align-items-center justify-content-around rounded-2 border-0 fs-small ">&gt;</button>
        </div>
    </section>
    `;
};
