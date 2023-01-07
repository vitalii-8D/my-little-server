const { Comment } = require('../../db/models')
const { statusCodes } = require('../../const')
const { getPopulatingFields } = require('../../utils')

const allowedPopulations = ['user']

const controller = async (req, res) => {
  const populate = getPopulatingFields(req.query.populate, allowedPopulations)
  const { id } = req.params

  const query = {
    where: { postId: id }
  }
  if (populate) query.include = populate

  try {
    let comments = await Comment.findAll(query)

    res.send({
      items: comments,
      count: comments.length
    })
  } catch (err) {
    console.error(err)
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
}

module.exports = controller
