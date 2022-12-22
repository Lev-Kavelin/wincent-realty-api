module.exports = ({ env }) => ({
    'netlify-deployments': {
      enabled: true,
      config: {
        accessToken: env('NETLIFY_ACCESS_TOKEN'),
        sites: [
          {
            name: 'wincent',
            id: '511e1715-297d-47d1-a3ad-f5629ca6a9b7',
            buildHook: 'https://api.netlify.com/build_hooks/639f4a69e97dd32c9f98ac17',
            branch: 'master' // optional
          }
        ]
      },
    },

    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
            secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
            endpoint: env('SCALEWAY_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
            params: {
              Bucket: env('SCALEWAY_BUCKET'),
            },
          },
        },
      },

  });

