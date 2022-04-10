// const parse = require('pg-connection-string').parse;

// if (process.env.NODE_ENV === 'production') {
// module.exports = () => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: process.env.DATABASE_HOST,
//         port: process.env.DATABASE_PORT,
//         database: process.env.DATABASE_NAME,
//         username: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         ssl: {
//           rejectUnauthorized: false
//         }
//       },
//       options: {}
//     }
//   }
// });

// } else {
//   module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'sqlite',
//           filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//         },
//         options: {
//           useNullAsDefault: true,
//         },
//       },
//     },
//   });
// }



// if (process.env.NODE_ENV === 'development') {
//   module.exports = ({ env }) => ({
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'sqlite',
//           filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//         },
//         options: {
//           useNullAsDefault: true,
//         },
//       },
//     },
//   });
// } else {
// module.exports = () => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: process.env.DATABASE_HOST,
//         port: process.env.DATABASE_PORT,
//         database: process.env.DATABASE_NAME,
//         username: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         ssl: {
//           rejectUnauthorized: false
//         }
//       },
//       options: {}
//     }
//   }
// });
// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: env('DATABASE_SSL', false),
//       // ssl: {
//       //   rejectUnauthorized: false
//       // },
//     },
//     debug: false,
//   },
// });
// }

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
