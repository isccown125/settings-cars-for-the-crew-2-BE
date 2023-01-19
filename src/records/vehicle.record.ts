import {VehicleEntity} from "../types";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type VehicleRecordResults = [VehicleRecord[], FieldPacket[]];

interface NewVehicleEntity extends Omit<VehicleEntity, 'id'> {
    id? : string;
}

export class VehicleRecord implements VehicleEntity {
    public id: string;
    public brand: string;
    public model: string;
    public period: string;
    public cost: number;

    constructor(obj: NewVehicleEntity) {
        // WALIDACJA NOWEGO OBIEKTU

        this.id = obj.id;
        this.brand = obj.brand;
        this.model = obj.model;
        this.period = obj.period;
        this.cost = obj.cost;
    }

    static async getOneById(id: string): Promise<VehicleRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `vehicle` WHERE `id` = :id", {
            id,
        }) as VehicleRecordResults;
        return results.length === 0 ? null : new VehicleRecord(results[0])
    }

    async insert(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `vehicle` VALUES(:id, :brand, :model, :period, :cost)", {
            id: this.id,
            brand: this.brand,
            model: this.model,
            period: this.period,
            cost: this.cost,
        });
        return this.id;
    }
}