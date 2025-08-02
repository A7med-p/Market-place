const Item = require('../../models/item.js')


const apiController = {

  index(req, res) {
    res.json(res.locals.data.items)
  },

  show(req, res) {
    res.json(res.locals.data.item)
  },

  create(req, res) {
    res.status(201).json(res.locals.data.item)
  },

  destroy(req, res) {
    res.status(200).json({ message: 'Item successfully deleted' })
  }
}

module.exports = apiController