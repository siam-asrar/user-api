import express from 'express'
import usersController from './users.controller'
const router = express.Router()

router.get('/all', usersController.getAllUsers)
router.get('/random', usersController.generateRandomUser)
router.post('/save', usersController.createUser)
router.patch('/:id', usersController.updateUserById)
router.put('/bulk-update', usersController.bulkUpdateUsers)
router.delete('/:id', usersController.deleteUser)

export default router
