const argon2 = require('argon2')

const { User } = require('../../db/models')
const { statusCodes, payloadFields } = require('../../const')
const { setAuthCookie } = require('../../services/auth/helpers')

const controller = async (req, res) => {
  const { email, password } = req.body

  let user
  try {
    user = await User.findOne({ where: { email } })
  } catch (err) {
    console.log(err)
  }
  if (!user) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Wrong email or password!' })

  const isPassVerified = await argon2.verify(user.password, password)
  if (!isPassVerified) return res.status(statusCodes.CLIENT_ERROR).send({ error: 'Wrong email or password!' })

  const { role, id } = user
  const token = await res.jwtSign({
    [payloadFields.UID]: id,
    [payloadFields.ROLE]: role
  })

  setAuthCookie(res, token)
  res.send({ status: 'OK', token })
}

module.exports = controller
