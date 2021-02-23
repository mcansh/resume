module.exports = {
  apps: [
    {
      name: 'Vercel',
      script: 'vc dev -l 4000',
      ignore_watch: ['.'],
    },
    {
      name: 'Remix',
      script: 'remix run',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
