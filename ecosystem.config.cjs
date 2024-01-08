module.exports = {
  apps: [
    {
      name: 'Tais',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.mjs',
      args: 'start',
    },
  ],
}
