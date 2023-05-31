import express from 'express'
import usersController from './users.controller'
const router = express.Router()

router.get('/all', usersController.getAllUsers)
router.get('/random', usersController.generateRandomUser)
router.get('/:id', usersController.getUserById)
router.post('/save', usersController.createUser)
router.patch('/update/:id', usersController.createUser)
router.patch('/bulk-update', usersController.createUser)
router.delete('/delete/:id', usersController.createUser)

export default router
