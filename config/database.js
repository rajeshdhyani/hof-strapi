  // module.exports = ({ env }) => ({
  //   defaultConnection: 'default',
  //   connections: {
  //     default: {
  //       connector: 'bookshelf',
  //       settings: {
  //         client: 'sqlite',
  //         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  //       },
  //       options: {
  //         useNullAsDefault: true,
  //       },
  //     },
  //   },
  // });

  if (process.env.NODE_ENV === 'development') {
    module.exports = ({ env }) => ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    });
  } else {
    module.exports = () => ({
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            ssl: { 
              rejectUnauthorized: false 
            } 
          },
          options: {}
        }
      }
    });
  }