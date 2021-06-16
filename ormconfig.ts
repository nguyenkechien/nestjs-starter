import * as dotenv from 'dotenv';

dotenv.config();

export = {
  type: 'mysql' as const,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: ['src/server/app/**/*.entity.ts'],
  migrations: ['src/server/migration/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/server/migration',
  },
  extra: {
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  },
};
