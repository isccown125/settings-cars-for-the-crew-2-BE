export type VehicleEntity = {
    id?: string,
    model: string,
    brand_id: string,
    country_id: string,
    discipline_id: string,
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