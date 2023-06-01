import express from 'express'
import usersController from './users.controller'
const router = express.Router()

router.get('/random', usersController.generateRandomUser)
router.get('/all', usersController.getAllUsers)
router.post('/save', usersController.createUser)
router.patch('/bulk-update', usersController.bulkUpdateUsers)
router.patch('/:id', usersController.updateUserById)
router.delete('/:id', usersController.deleteUser)

export default router
