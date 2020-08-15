import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus, NotFoundException,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import {CoffeesService} from "./coffees.service";
import {CreateCoffeeDto} from "./dto/create-coffee.dto";
import {UpdateCoffeeDto} from "./dto/update-coffee.dto";
import {PaginationDto} from "../common/dto/pagination-dto";
import {Public} from "../common/decorators/public.decorator";

@Controller('api/v1')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService) {}

    @Public()
    @Get('coffees')
    @HttpCode(HttpStatus.OK)
    findAll(@Query() pagination: PaginationDto) {
        return this.coffeeService.findAll(pagination);
    }

    @Get('coffees/:id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: number) {
        return this.coffeeService.findOne(id);
    }

    @Post('coffees')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateCoffeeDto) {
        return this.coffeeService.create(body);
    }

    @Patch('coffees/:id')
    update(@Param('id') id: number, @Body() body: UpdateCoffeeDto){
        return this.coffeeService.update(id, body);
    }

    @Delete('coffees/:id')
    remove(@Param('id') id: number){
        return this.coffeeService.remove(id);
    }
}
