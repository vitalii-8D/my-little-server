const { Post } = require('../../db/models')
const { statusCodes } = require('../../const')

const controller = async (req, res) => {
  let posts
  try {
    posts = await Post.findAll({
      include: 'tags'
    })
  } catch (err) {
    console.error(err)
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }

  res.send({
    items: posts,
    count: posts.length
  })
}

module.exports = controller
