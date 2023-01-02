const { User } = require('../../db/models')
const { statusCodes, userRoles, payloadFields } = require('../../const')

const controller = async (req, res) => {
  const uId = req.user[payloadFields.UID]

  let user
  try {
    user = await User.findByPk(uId)
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
  if (!user) return res.status(statusCodes.NOT_FOUND).send({ error: 'User not found' })

  res.send(user)
}

module.exports = controller
