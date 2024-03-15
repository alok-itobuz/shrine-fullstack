import { statsCardsGenerator } from "../../../components/pages.js"


export default (sectionData, state) => {
    const { cards } = sectionData
    return `
    <section id="stats" class="py-5 bg-pink-orange container">
            <div class="row h-100 w-100 m-0 p-0 row-gap-2 row-gap-md-0">
                ${cards.map(statsCardsGenerator).join('')}
            </div>
    </section>
    `
}