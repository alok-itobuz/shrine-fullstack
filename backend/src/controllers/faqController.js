import faqs from "../devData/faq.js"

export const getAllFaq = (req, res) => {
    res.status(200).json(faqs)
}