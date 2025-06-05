const { initPlasmicLoader } = require('@plasmicapp/loader-nextjs');

module.exports = {
  // Your other Next.js config options here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.plasmic.app',
      },
    ],
  },
  // Expose environment variables to the client
  env: {
    PLASMIC_PROJECT_ID: process.env.PLASMIC_PROJECT_ID,
    PLASMIC_PROJECT_TOKEN: process.env.PLASMIC_PROJECT_TOKEN,
    PLASMIC_PREVIEW: process.env.PLASMIC_PREVIEW,
  },
};

