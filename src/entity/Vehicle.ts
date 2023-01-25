import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {VehicleEntity} from "../types";

@Entity()
export class Vehicle implements VehicleEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({
        length: 50
    })
    model: string
    @Column({
        length: 36
    })
    brand_id: string
    @Column({
        length: 36
    })
    country_id: string
    @Column({
        length: 36
    })
    discipline_id: string
    @Column({
        length: 4
    })
    period: string
    @Column({
        type: "bigint"
    })
    cost: number
}