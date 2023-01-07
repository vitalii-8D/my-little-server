const { Post } = require('../../db/models')
const { payloadFields, statusCodes } = require('../../const')
const { getPopulatingFields } = require('../../utils')

const allowedPopulations = ['tags', 'comments', 'user']

const controller = async (req, res) => {
  const uId = req.user[payloadFields.UID]
  const populate = getPopulatingFields(req.query.populate, allowedPopulations)

  const query = {
    where: {
      userId: uId
    }
  }
  if (populate) query.include = populate

  try {
    let posts = await Post.findAll(query)

    res.send({
      items: posts,
      count: posts.length
    })
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
}

module.exports = controller
