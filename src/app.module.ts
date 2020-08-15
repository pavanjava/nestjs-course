import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {OrmConfig} from "./orm-config";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), CoffeesModule, TypeOrmModule.forRoot(OrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
