const { User } = require('../../db/models')
const { statusCodes, userRoles, payloadFields } = require('../../const')

const controller = async (req, res) => {
  if (!Object.keys(req.body).length) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Empty body!' })

  const uId = req.user[payloadFields.UID]

  let user
  try {
    user = await User.findByPk(uId)
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
  if (!user) return res.status(statusCodes.NOT_FOUND).send()

  try {
    await user.update(req.body)
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }

  res.status(statusCodes.OK).send({ status: 'User updated!' })
}

module.exports = controller
