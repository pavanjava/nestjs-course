import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const OrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    schema: 'iluvcoffee',
    synchronize: true,
    autoLoadEntities: true,
    logging: true
}