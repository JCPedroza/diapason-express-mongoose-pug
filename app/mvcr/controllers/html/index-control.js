const get = (req, res, nxt) => {
  const title = 'Diapasones Main Page'
  const locals = { title }
  res.render('index-view.pug', locals)
}

module.exports = {
  get
}
