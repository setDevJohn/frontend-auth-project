module.exports = {
  apps: [
    {
      name: "auth",
      script: "npm",
      args: "run preview",
      env: {
        NODE_ENV: "production",
        PORT: 4002,
        HOST: '0.0.0.0'
      }
    }
  ]
};
