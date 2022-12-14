const { User } = require('../../db/models')
const { statusCodes, userRoles, payloadFields } = require('../../const')

const controller = async (req, res) => {
  if (!Object.keys(req.body).length) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Empty body!' })

  const uRole = req.user[payloadFields.ROLE]
  const uId = req.user[payloadFields.UID]

  try {
    let user = await User.findByPk(req.params.id)

    if (!user) return res.status(statusCodes.NOT_FOUND).send({ error: 'Not found' })

    if (uRole !== userRoles.ADMIN && user.id !== uId)
      return res.code(statusCodes.FORBIDDEN).send({ error: 'Access denied' })

    await user.update(req.body)

    res.status(statusCodes.OK).send({ status: 'User updated!' })
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
}

module.exports = controller
