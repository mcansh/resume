module.exports = {
  apps: [
    {
      name: 'Arc',
      script: 'cd ../../../ && arc sandbox',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Remix',
      script: 'remix run',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Styles',
      script: 'postcss styles --base styles --dir app/ -w',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
