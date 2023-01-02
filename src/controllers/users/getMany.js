const { User } = require('../../db/models')
const { statusCodes, userRoles, payloadFields } = require('../../const')

const controller = async (req, res) => {
  let users
  try {
    users = await User.findAll()
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }

  res.send({
    items: users,
    count: users.length
  })
}

module.exports = controller
