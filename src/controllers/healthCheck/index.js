const controller = (req, res) => {
  const payload = req.user || {}

  res.send({ status: 'OK', payload })
}

module.exports = controller
