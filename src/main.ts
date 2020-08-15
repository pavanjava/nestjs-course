import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger, ValidationPipe} from '@nestjs/common';
import {HttpExceptionFilter} from "./common/filter/http-exception.filter";
import {ApiKeyGuard} from "./common/gaurds/api-key.guard";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
                enableImplicitConversion: true
            }
        }
    ));
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalGuards(new ApiKeyGuard());
    await app.listen(3000);
    Logger.log(`Server running on 3000`);
}

bootstrap();
