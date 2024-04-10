import 'dotenv/config';
import { Dialect } from 'sequelize/types';

export const config: any = {
  port: +process.env.PORT || 3000,
  database: {
    dialect: 'postgres' as Dialect,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    autoLoadModels: true,
    synchronize: true,
    logging: false,
  },
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
};
