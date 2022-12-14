const argon2 = require('argon2')

const { User } = require('../../db/models')
const { statusCodes } = require('../../const')
const { setAuthCookie } = require('../../services/auth/helpers')

const controller = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })

  if (user) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'User already exists!' })

  const hash = await argon2.hash(password)

  const createdUser = await User.create({
    ...req.body,
    password: hash
  })

  const { role, id } = createdUser
  const token = await res.jwtSign({
    id,
    role
  })

  setAuthCookie(res, token)
  res.send({ status: 'OK', token })
}

module.exports = controller
