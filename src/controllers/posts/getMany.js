const { Post } = require('../../db/models')
const { statusCodes } = require('../../const')
const { getPopulatingFields } = require('../../utils')

const allowedPopulations = ['tags', 'comments', 'user']

const controller = async (req, res) => {
  const populate = getPopulatingFields(req.query.populate, allowedPopulations)

  const query = {}
  if (populate) query.include = populate

  try {
    let posts = await Post.findAll(query)

    res.send({
      items: posts,
      count: posts.length
    })
  } catch (err) {
    console.error(err)
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
}

module.exports = controller
