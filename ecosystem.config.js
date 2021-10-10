module.exports = {
  apps: [
    {
      name: 'elvisrauza-app',
      script: 'npm',
      args: 'run start',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        HOST: '0.0.0.0',
        PORT: 5000,
        NODE_ENV: 'production'
      },
    },
  ],
}
