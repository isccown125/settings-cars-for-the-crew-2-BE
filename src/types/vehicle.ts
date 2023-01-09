export type VehicleEntity = {
    id?: string,
    brand: string,
    model: string,
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