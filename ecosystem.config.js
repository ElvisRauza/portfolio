module.exports = {
  apps: [
    {
      name: 'ElvisRauza',
      exec_mode: 'cluster',
      port: 3000,
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
