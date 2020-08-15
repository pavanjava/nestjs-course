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

@Controller('api/v1')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService) {}

    @Get('coffees')
    @HttpCode(HttpStatus.OK)
    findAll(@Query() pagination) {
        // const {limit, offset} = pagination;
        return this.coffeeService.findAll();
    }

    @Get('coffees/:id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: number) {
        const coffee = this.coffeeService.findOne(id);
        if(!coffee){
            throw new NotFoundException(`record with id: ${id} does not exist`);
        }
        return coffee;
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
