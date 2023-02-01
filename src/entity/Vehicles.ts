import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {VehicleEntity} from "../types";
import {Vechicle_brand} from "./Vechicle_brand";
import {Vechicle_country} from "./Vehicle_country";
import {Vechicle_discipline} from "./Vehicle_dyscipline";

@Entity()
export class Vehicles implements VehicleEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({
        length: 50
    })
    model: string
    @OneToOne(() => Vechicle_brand)
    @JoinColumn()
    brand: Vechicle_brand
    @OneToOne(() => Vechicle_country)
    @JoinColumn()
    country: Vechicle_country
    @OneToOne(() => Vechicle_discipline)
    @JoinColumn()
    discipline: Vechicle_discipline
    @Column({
        length: 4
    })
    period: string
    @Column({
        type: "bigint"
    })
    cost: number
}