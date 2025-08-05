const Item = require('../../models/item.js')
const Cart = require('../../models/cart.js')

const dataController = {}
dataController.index = async (req,res,next) => {
   try {
    const user = await req.user.populate('items')
    res.locals.data.items = user.items
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.destroy = async (req, res, next ) => {
    try {
         await Item.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req, res, next) => {
    try {
      res.locals.data.item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    try {
      res.locals.data.item = await Item.create(req.body)
      req.user.items.addToSet({_id: res.locals.data.item._id })
      await req.user.save()
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req, res, next) => {
    try {
        res.locals.data.item = await Item.findById(req.params.id)
        if(!res.locals.data.item){
            throw new error(`could not locate an Item with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.Home = async (req,res,next) => {
   try {
    res.locals.data.items = await Item.find({})
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.buy = async (req,res,next) => {
   try {
    res.locals.data.item = await Item.findById(req.params.id)
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.Cart = async (req, res, next) => {
   try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items')
    res.locals.data.carts = cart ? cart.items : []
    res.locals.data.cart = cart
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.addToCart = async (req, res, next) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id })
        if (!cart) {
            cart = await Cart.create({ user: req.user._id, items: [] })
        }
        const item = await Item.findById(req.body.itemId)
        if (item.stock > 0) {
            item.stock = parseInt(item.stock) - 1
            await item.save()
            cart.items.addToSet(item._id)
            await cart.save()
            res.locals.data.cart = cart
            next()
        } else {
            res.status(400).send({ message: 'Item out of stock' })
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.removeFromCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id })
        if (!cart) throw new Error('Cart not found')
        const item = await Item.findById(req.body.itemId)
        item.stock = parseInt(item.stock) + 1
        await item.save()
        cart.items.pull(item._id)
        await cart.save()
        res.locals.data.cart = cart
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.clearCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('items')
        for (const item of cart.items) {
            if (parseInt(item.stock) <= 0) {
                await Item.deleteOne({ _id: item._id })
            }
        }
        cart.items = []
        await cart.save()
        res.locals.data.cart = cart
        next()
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
module.exports = dataController