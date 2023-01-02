const { Post } = require('../../db/models')
const {
  payloadFields: { UID, ROLE },
  statusCodes
} = require('../../const')

const controller = async (req, res) => {
  const uId = req.user[UID]
  const { tags } = req.body

  let post
  try {
    post = await Post.create({ ...req.body, userId: uId })
    await post.setTags(tags)
  } catch (err) {
    console.error(err)
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }

  res.status(statusCodes.CREATED).send({ status: 'Post created' })
}

module.exports = controller
