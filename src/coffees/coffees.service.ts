import {Injectable, NotFoundException} from '@nestjs/common';
import {Coffee} from "./entities/coffee.entity";
import {CreateCoffeeDto} from "./dto/create-coffee.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm/index";
import {UpdateCoffeeDto} from "./dto/update-coffee.dto";
import {Flavor} from "./entities/flavor.entity";

@Injectable()
export class CoffeesService {

    constructor(@InjectRepository(Coffee) private readonly coffeeRepository: Repository<Coffee>,
                @InjectRepository(Flavor) private readonly flavorRepository: Repository<Flavor>) {
    }

    findAll = async (): Promise<Coffee[]> => {
        return await this.coffeeRepository.find({relations:['flavors']});
    }

    findOne = async (id: number): Promise<Coffee> => {
        return await this.coffeeRepository.findOne(id, {relations:['flavors']});
    }

    create = async (coffeeDto: CreateCoffeeDto): Promise<Coffee> => {

        const flavors = await Promise.all(
            coffeeDto.flavors.map(flavor => this.preloadFlavorByName(flavor))
        )
        console.log({...coffeeDto})
        console.log(flavors);
        console.log({...coffeeDto, flavors});
        const coffee = await this.coffeeRepository.create({...coffeeDto, flavors});
        await this.coffeeRepository.save(coffee);
        return coffee;
    }

    update = async (id: number, coffeePayload: UpdateCoffeeDto): Promise<Coffee> => {

        const flavors = coffeePayload.flavors && (await Promise.all(
            coffeePayload.flavors.map(flavor => this.preloadFlavorByName(flavor))
        ))

        const coffee = await this.coffeeRepository.preload({
            id: id,
            ...coffeePayload,
            flavors
        });
        if(!coffee){
            throw new NotFoundException(`Record with ${id} is not found in database`);
        }
        await this.coffeeRepository.save(coffee);
        return coffee;
    }

    remove = async (id: number): Promise<DeleteResult> => {
       const result = await this.coffeeRepository.delete(id);
       return result;
    }

    private preloadFlavorByName = async (name: string): Promise<Flavor> => {
        const flavorExist = await this.flavorRepository.findOne({name});
        if(flavorExist){
            return flavorExist;
        }
        return this.flavorRepository.create({name});
    }
}
