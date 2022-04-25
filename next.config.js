// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'https://won-games-client-supertgo.vercel.app/',
      'https://supertgo-wongames-92hjl.ondigitalocean.app/'
    ]
  },
  future: {
    webpack5: true
  }
});
