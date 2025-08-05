const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')

router.get('/', authDataController.auth, dataController.index, viewController.index);

router.get('/new', authDataController.auth, viewController.newView );

router.get('/home', authDataController.xauth, dataController.Home, viewController.home );

router.get('/buy/:id', authDataController.xauth, dataController.show, viewController.buy );

router.get('/cart', authDataController.auth, dataController.Cart, viewController.cart );

router.post('/cart/add', authDataController.auth, dataController.addToCart, viewController.redirectCart);

router.post('/cart/remove', authDataController.auth, dataController.removeFromCart, viewController.redirectCart);

router.post('/cart/buy', authDataController.auth, dataController.clearCart, viewController.redirectCart);

router.delete('/:id', authDataController.auth, dataController.destroy, viewController.redirectHome);

router.put('/:id', authDataController.auth, dataController.update, viewController.redirectShow);

router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);

router.get('/:id/edit', authDataController.auth, dataController.show, viewController.edit);

router.get('/:id', authDataController.auth, dataController.show, viewController.show);

module.exports = router;