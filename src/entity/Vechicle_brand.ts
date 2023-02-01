import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {BrandEntity} from "../types";

@Entity()
export class Vechicle_brand implements BrandEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({
        length: 50
    })
    brand: string
}