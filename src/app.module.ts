import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {OrmConfig} from "./orm-config";

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot(OrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
