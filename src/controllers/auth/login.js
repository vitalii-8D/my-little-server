const argon2 = require('argon2')

const { User } = require('../../db/models')
const { statusCodes } = require('../../const')

const controller = async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ where: { email } })
  if (!user) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Wrong email or password!' })

  const isPassVerified = await argon2.verify(user.password, password)
  if (!isPassVerified) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Wrong email or password!' })

  const { role, id } = user
  const token = await res.jwtSign({
    id,
    role
  })

  res.send({ status: 'OK', token })
}

module.exports = controller
