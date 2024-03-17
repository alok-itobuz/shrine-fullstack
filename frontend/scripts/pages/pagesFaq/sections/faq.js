import { accordionItemGenerator } from "../../../components/pagesFaq.js"

export default (faqs) => {
    console.log('faqq', faqs)
    return `
        <section id="faq" class="section-text-image container pb-4">
            <div class="accordion row m-0 p-0 gap-4 gap-sm-0" id="accordionPanelsStayOpenExample">
                ${faqs?.map(accordionItemGenerator).join("")}
            </div>
        </section>
    `
}