const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const itemApiController = require('../controllers/items/apiController')
const itemDataController = require('../controllers/items/dataController')

router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

router.get('/items', userApiController.auth, itemDataController.index, itemApiController.index)
router.get('/items/:id', userApiController.auth, itemDataController.show, itemApiController.show)
router.post('/items', userApiController.auth, itemDataController.create, itemApiController.create)
router.put('/items/:id', userApiController.auth, itemDataController.update, itemApiController.show)
router.delete('/items/:id', userApiController.auth, itemDataController.destroy, itemApiController.destroy)

module.exports = router 