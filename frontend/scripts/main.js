import { API_URL } from "./constants.js";
import { appendStyle } from "./helpers.js";
import { loadHomePage, loadPagesFaq, loadPagesGallery, loadPagesMember, loadPagesPage } from "./pages/index.js";
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

function loadSectionData(e) {
  e?.preventDefault()

  navContainer.classList.remove('bg-yellowish')

  const main = document.querySelector("main");
  main.innerHTML = "";
  switch (window.location.hash.slice(1)) {
    case "":
      navContainer.classList.add('bg-yellowish')
      appendStyle('home.css')
      loadHomePage(state);
      break;
    case 'pages':
    case 'pages/about':
      appendStyle('pages.css')
      loadPagesPage(state)
      break;
    case 'pages/faq':
      appendStyle('pagesFaq.css')
      loadPagesFaq(state)
      break;
    case 'pages/gallery':
      appendStyle('pagesFaq.css')
      loadPagesGallery(state)
      break;
    case 'pages/members':
      appendStyle('pagesFaq.css')
      loadPagesMember(state)
      break;
  }
}

loadSectionData()
window.addEventListener('hashchange', loadSectionData);