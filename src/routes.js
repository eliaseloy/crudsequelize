const express = require('express')
const UsuarioCotroller = require('./controller/UsuarioCotroller')

const routes = express.Router()

routes.get('/', ( req, res ) => {
    res.send('Olá mundo')
})

routes.get('/usuario', UsuarioCotroller.index)

routes.get('/usuario/:id', UsuarioCotroller.findById)

routes.post('/usuario', UsuarioCotroller.store)

routes.delete('/usuario/:id', UsuarioCotroller.delete)

routes.put('/usuario', UsuarioCotroller.update)

module.exports = routes;