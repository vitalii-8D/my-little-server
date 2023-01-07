const { User } = require('../../db/models')
const { statusCodes } = require('../../const')

const controller = async (req, res) => {
  const { id } = req.params

  let user
  try {
    user = await User.findByPk(id)
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
  if (!user) return res.status(statusCodes.NOT_FOUND).send({ error: 'User not found' })

  res.send(user)
}

module.exports = controller
