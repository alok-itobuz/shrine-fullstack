import { Router } from 'express'
import { getAllEvents, getSingleEvent } from '../controllers/eventController.js'

const router = Router()

router.route('/').get(getAllEvents)
router.route('/:id').get(getSingleEvent)

export default router