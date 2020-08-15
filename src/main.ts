import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger, ValidationPipe} from '@nestjs/common';
import {HttpExceptionFilter} from "./common/filter/http-exception.filter";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

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

    const options = new DocumentBuilder()
        .setTitle('ILuvCoffee')
        .setDescription('a sample application exposing apis for coffees')
        .setVersion('0.1')
        .build();

    const doc = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, doc);

    await app.listen(3000);
    Logger.log(`Server running on 3000`);
}

bootstrap();
