const { Tag } = require('../../db/models')
const { statusCodes } = require('../../const')
const { getPopulatingFields } = require('../../utils')

const allowedPopulations = ['tags', 'comments', 'user']

const controller = async (req, res) => {
  try {
    let tags = await Tag.findAll()

    res.send({
      items: tags,
      count: tags.length
    })
  } catch (err) {
    console.error(err)
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
}

module.exports = controller
