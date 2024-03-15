import { sectionHeading } from "../../../components/main.js";

export default (sectionData) => {
  const { headingPrimary, descriptionPrimary } = sectionData;

  // Quote and Author will be fetched from backend
  const quoteAuthorObj = {
    quote:
      "I love you when you bow in your mosque, kneel in your temple, pray in your church. For you and I are sons of one religion, and it is the spirit",
    author: "Martin Luther",
  };
  const quoteImage = {
    url: "./images/quote/bibel.svg",
    alt: "bibel",
  };

  const { quote, author } = quoteAuthorObj;

  return `
    <section id="quote" class="section-text-image container py-5">
        <div class="row m-0 p-0 justify-content-between">
            <div class="text-container large-div col-12 col-sm-6 m-0 p-0 d-flex flex-column justify-content-between align-items-start gap-3 mx-auto mx-sm-0">
                ${sectionHeading(headingPrimary)}
                <p class="fs-small m-0">${descriptionPrimary}</p>
                <span class="text-uppercase fs-small message-border w-auto py-2 px-4 rounded-2 position-relative">
                    FAMOUS QUOTE
                    <span class="position-absolute d-inline-block start-50"></span>
                </span>
                <p class="m-0 p-0">&Prime;<span class="m-0 p-0 fs-small">${quote}</span>&Prime;</p>
                <p class="author m-0 p-0 d-flex align-items-center gap-2">&bdquo; <span class="author-name text-capitalize font-roboto fs-large fw-semibold">${author}</span></p>
            </div>
            <div class="image-container small-div col-12 col-sm-6 m-0 p-0 p-2 mx-auto mx-sm-0 mt-3 mt-sm-0">
                <div class="image-wrapper rectangle-circle h-100 mx-auto overflow-hidden">
                    <img src=${quoteImage?.url} alt=${quoteImage?.alt
    } class="h-100 w-100 object-fit-cover object-center">
                </div>
            </div>
        </div>
    </section>
    `;
};
