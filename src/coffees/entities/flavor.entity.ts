import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {Coffee} from "./coffee.entity";

@Entity()
export class Flavor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Coffee, coffees => coffees.flavors)
    coffees: Coffee[]
}
