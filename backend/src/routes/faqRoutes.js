import { Router } from 'express'
import { getAllFaq } from '../controllers/faqController.js'


const faqRouter = Router()

faqRouter.route('/').get(getAllFaq)

export default faqRouter