import { API_URL } from "./constants.js";
import { appendStyle } from "./helpers.js";
import { loadHomePage, loadPagesEvents, loadPagesFaq, loadPagesGallery, loadPagesMember, loadPagesPage, loadPagesSingleEvents, loadPagesVideo } from "./pages/index.js";
import state, { fetchAndStore } from './states.js'

// fetch and update the state
(async function () {
  await fetchAndStore(`${API_URL}/members`, 'members')
  await fetchAndStore(`${API_URL}/articles`, 'articles')
  await fetchAndStore(`${API_URL}/events`, 'events')
  await fetchAndStore(`${API_URL}/alias/stats`, 'stats')
  await fetchAndStore(`${API_URL}/faq`, 'faq')

  loadSectionData()
})()

const navContainer = document.querySelector('.navbar-container')

async function loadSectionData(e) {
  e?.preventDefault()

  navContainer.classList.remove('bg-yellowish')

  const main = document.querySelector("main");
  main.innerHTML = "";

  const currentHash = window.location.hash.slice(1)
  switch (true) {
    case /^w{0}$/.test(currentHash):
      navContainer.classList.add('bg-yellowish')
      appendStyle('home.css')
      loadHomePage(state);
      break;
    case /^pages$/.test(currentHash):
    case /^pages\/about$/.test(currentHash):
      appendStyle('pages.css')
      loadPagesPage(state)
      break;
    case /^pages\/faq$/.test(currentHash):
      appendStyle('pagesFaq.css')
      loadPagesFaq(state)
      break;
    case /^pages\/gallery.*$/.test(currentHash):
      appendStyle('pagesGallery.css')
      await loadPagesGallery(state)
      break;
    case /^pages\/members$/.test(currentHash):
      loadPagesMember(state)
      break;
    case /^pages\/video$/.test(currentHash):
      // appendStyle('pagesFaq.css')
      loadPagesVideo(state)
      break;
    case /^pages\/events$/.test(currentHash):
    case /^pages\/events\/$/.test(currentHash):
      appendStyle('pagesEvents.css')
      loadPagesEvents(state)
      break;
    case /^pages\/events\/.*$/.test(currentHash):
      // appendStyle('pagesFaq.css')
      loadPagesSingleEvents(state)
      break;
  }
}

loadSectionData()
window.addEventListener('hashchange', loadSectionData);