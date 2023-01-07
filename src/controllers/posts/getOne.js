const { Post } = require('../../db/models')
const { statusCodes } = require('../../const')
const { getPopulatingFields } = require('../../utils')

const allowedPopulations = ['comments']

const controller = async (req, res) => {
  const { id } = req.params
  const populate = getPopulatingFields(req.query.populate, allowedPopulations)

  const options = {}
  if (populate) options.include = populate

  try {
    let post = await Post.findByPk(id, options)

    if (!post) return res.status(statusCodes.NOT_FOUND).send({ error: 'User not found' })

    res.send(post)
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
}

module.exports = controller
