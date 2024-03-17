import { Router } from 'express'
import { getStats } from '../controllers/aliasController.js'

const aliasRouter = Router()

aliasRouter.route('/stats').get(getStats)

export default aliasRouter