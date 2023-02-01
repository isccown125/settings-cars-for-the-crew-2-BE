import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vechicle_country{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({
        length: 50
    })
    country: string
}