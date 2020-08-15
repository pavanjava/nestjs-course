import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {Flavor} from "./flavor.entity";

@Entity() // sql table will be generated with table name as 'coffee'
export class Coffee{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(type => Flavor, flavor => flavor.coffees, {cascade: true})
    flavors: Flavor[];
}