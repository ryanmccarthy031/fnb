module.exports = function (api) {
  api.configureServer(app => {
    app.get('/', (req, res) => {
      res.redirect('/en-us')
    })
  })
}
