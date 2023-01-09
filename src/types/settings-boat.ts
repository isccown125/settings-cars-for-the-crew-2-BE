export type SettingsBoatEntity = {
    id: string,
    vehicleId: string,
    weight_distribution: number,
    rudder_angle: number,
    braking_power: number,
    buoyancy: number,
    hullFriction: number,
    trimTabs: number,
}
export type SettingsBoatReq = {
    vehicleId: string,
    weight_distribution: number,
    rudder_angle: number,
    braking_power: number,
    buoyancy: number,
    hullFriction: number,
    trimTabs: number,
}
export type SettingsBoatRes = {
    id?: string,
    vehicleId: string,
    weight_distribution: number,
    rudder_angle: number,
    braking_power: number,
    buoyancy: number,
    hullFriction: number,
    trimTabs: number,
}