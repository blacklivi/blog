// eslint-disable-next-line no-unused-vars
const express = require('express')
const consola = require('consola')
// eslint-disable-next-line no-undef
const { Nuxt, Builder } = requilre('nuxt')
const config = require('./nuxt.config.js')
const app = require('./app')
config.dev = !(process.env.NODE_ENV === '‘production')

async function start () {
  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(nuxt.render)
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
}
start()
