import { Injectable } from '@nestjs/common';
import {Coffee} from "./entities/coffee.entity";
import {CreateCoffeeDto} from "./dto/create-coffee.dto";

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [{
        id: 1,
        name: 'Shipwreck Roast',
        brand: 'Buddy Brew',
        flavors: ['chocolate', 'vanilla'],
    }];

    findAll = (): Coffee[] => {
        return this.coffees;
    }

    findOne = (id: number): Coffee => {
        return this.coffees.find(item => item.id === +id);
    }

    create = (coffeeDto: CreateCoffeeDto) => {
        const coffee = new Coffee();
        coffee.id = this.coffees.length+1;
        coffee.name = coffeeDto.name;
        coffee.brand = coffeeDto.brand;
        coffee.flavors = coffeeDto.flavors;

        this.coffees.push(coffee);
        return coffee;
    }

    update = (id: number, coffeePayload: any): Coffee => {
        const coffeeObjectById = this.findOne(id);
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        let mergeObj: Coffee;
        if(coffeeObjectById){
            mergeObj = {...coffeeObjectById, ...coffeePayload}
        }
        this.coffees[coffeeIndex] = mergeObj;
        return mergeObj;
    }

    remove = (id: number): boolean => {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        let isDeleted = false;
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1);
            isDeleted = true;
        }
        return isDeleted;
    }
}
