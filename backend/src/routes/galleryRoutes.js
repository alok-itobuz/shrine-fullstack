import { Router } from 'express'
import { getGallery } from '../controllers/galleryController.js'

const galleryRouter = Router()

galleryRouter.route('/:type').get(getGallery)

export default galleryRouter