import {
  articlesSectionData,
  eventsSectionData,
  growSectionData,
  introductionSectionData,
  membersSectionData,
  potentialSectionData,
  quoteSectionData,
  satisfactionSectionData,
} from "./sectionsData.js";
import { carouselHandler } from "../helpers.js";
import {
  heroSection,
  articlesSection,
  eventsSection,
  growSection,
  introductionSection,
  membersSection,
  potentialSection,
  quoteSection,
  satisfactionSection,
} from "./sections/index.js";
import { API_URL } from "../../constants.js";

export default (state) => {
  const main = document.querySelector("main");

  const elementArray = [
    heroSection(),
    introductionSection(introductionSectionData),
    quoteSection(quoteSectionData),
    potentialSection(potentialSectionData),
    satisfactionSection(satisfactionSectionData),
    growSection(growSectionData),
    membersSection(membersSectionData, state.members?.slice(0, 4)),
    eventsSection(eventsSectionData, state.events),
    articlesSection(articlesSectionData, state.articles),
  ];

  elementArray.forEach((element) =>
    main.insertAdjacentHTML("beforeend", element)
  );


  // event section carousel
  const btnEventLeft = document.querySelector(".btn-event-carousel.btn-left");
  const btnEventRight = document.querySelector(".btn-event-carousel.btn-right");
  const eventCarouselWrapper = document.querySelector(
    "#events .carousel-wrapper"
  );
  const eventCarouselCardWrapper = document.querySelector(
    "#events .carousel-card-wrapper"
  );

  let currentEventCarousel = 0;
  btnEventLeft?.addEventListener("click", () => {
    if (currentEventCarousel === 0) return;
    currentEventCarousel--;
    carouselHandler(
      currentEventCarousel,
      eventCarouselWrapper,
      eventCarouselCardWrapper.getBoundingClientRect().width
    );
  });
  btnEventRight?.addEventListener("click", () => {
    if (currentEventCarousel === state.events.length - 1) return;
    currentEventCarousel++;
    carouselHandler(
      currentEventCarousel,
      eventCarouselWrapper,
      eventCarouselCardWrapper.getBoundingClientRect().width
    );
  });

  // article subscribe email
  const subscribeInputCheckbox = document.querySelector('#articles .subscribe-checkbox')
  const inputSubscriberEmail = document.querySelector('#articles .input-subscribe-email')
  const formSubscribe = document.querySelector('#articles .form-subscribe')


  formSubscribe?.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (!inputSubscriberEmail.value) return alert('Email shoule be present.')
    if (!subscribeInputCheckbox.checked) return alert('You must agree the terms and conditions.')

    const data = {
      email: inputSubscriberEmail.value
    }
    // todo: send email to backend
    const response = await fetch(`${API_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  })
};
