const argon2 = require('argon2')

const { User } = require('../../db/models')
const { statusCodes } = require('../../const')
const { setAuthCookie } = require('../../services/auth/helpers')

const controller = async (req, res) => {
  const { email, password } = req.body

  const isEmailValid = email.indexOf('@')
  if (isEmailValid === -1) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Email is not valid' })

  let user
  try {
    user = await User.findOne({ where: { email } })
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ error: err.message })
  }
  if (user) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'User already exists!' })

  const hash = await argon2.hash(password)

  try {
    await User.create({
      ...req.body,
      password: hash
    })
  } catch (err) {
    return res.status(statusCodes.SERVER_ERROR).send({ err: error.message })
  }

  // setAuthCookie(res, token)
  res.status(statusCodes.CREATED).send({ status: 'OK' })
}

module.exports = controller
