const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('./dist'))
// app.use('/*', (req, res) => {
//   res.render('pages/error', { code: '404', message: 'Не туда попали' })
// })

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
})
