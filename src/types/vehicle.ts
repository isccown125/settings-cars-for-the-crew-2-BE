import {BrandEntity} from "./brand";
import {CountryEntity} from "./country";
import {DisciplineEntity} from "./discipline";

export type VehicleEntity = {
    id?: string,
    model: string,
    brand: BrandEntity,
    country: CountryEntity,
    discipline: DisciplineEntity,
    period: string,
    cost: number,
}

export type VehicleReq = {
    brand: string,
    model: string,
    period: string,
    cost: number,
    discipline: string
}

export type VehicleRes = {
    id: string,
    brand: string,
    model: string,
    period: string,
    cost: number,
}