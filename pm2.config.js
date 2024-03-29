module.exports = {
  apps: [
    {
      name: 'Vercel',
      script: 'vc dev -l 4000',
      ignore_watch: ['.'],
    },
    {
      name: 'PostCSS',
      script: 'postcss styles --base styles --dir app/styles -w',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Remix',
      script: 'remix run2',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
