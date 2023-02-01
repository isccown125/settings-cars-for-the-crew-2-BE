import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vechicle_discipline{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({
        length: 50
    })
    discipline: string
}