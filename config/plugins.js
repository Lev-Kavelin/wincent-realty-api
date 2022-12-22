module.exports = ({ env }) => ({
    'netlify-deployments': {
      enabled: true,
      config: {
        accessToken: env('NETLIFY_ACCESS_TOKEN'),
        sites: [
          {
            name: 'wincent',
            id: 'a622580f-ffee-4100-adda-5ebd8ef73e63',
            buildHook: 'https://api.netlify.com/build_hooks/63a46298fb6de82a7c09cac6',
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

      seo: {
        enabled: true,
      },

  });

