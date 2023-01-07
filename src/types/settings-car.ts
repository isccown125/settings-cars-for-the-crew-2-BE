export type SettingsCarEntity = {
    id: string,
    vehicleId: string,
    tractionControl: number,
    abs: number,
    esp: number,
    driftAssist: number,
    areoDistribution:  number,
    diffDistribution: number,
    gearbox: number,
    tireGripFront: number,
    tireGripRear: number,
    brakePower: number,
    brakeBalance: number,
    suspCompFront: number,
    suspRebFront: number,
    suspCompRear: number,
    suspRebRear: number,
    suspGeomCamberFront: number,
    suspGeomCamberRear: number,
    arbFront: number,
    arbRear: number,
}

export type SettingsCarReq = {
    vehicleId: string,
    tractionControl: number,
    abs: number,
    esp: number,
    driftAssist: number,
    areoDistribution:  number,
    diffDistribution: number,
    gearbox: number,
    tireGripFront: number,
    tireGripRear: number,
    brakePower: number,
    brakeBalance: number,
    suspCompFront: number,
    suspRebFront: number,
    suspCompRear: number,
    suspRebRear: number,
    suspGeomCamberFront: number,
    suspGeomCamberRear: number,
    arbFront: number,
    arbRear: number,
}

export type SettingsCarRes={
    id?: string,
    vehicleId: string,
    tractionControl: number,
    abs: number,
    esp: number,
    driftAssist: number,
    areoDistribution:  number,
    diffDistribution: number,
    gearbox: number,
    tireGripFront: number,
    tireGripRear: number,
    brakePower: number,
    brakeBalance: number,
    suspCompFront: number,
    suspRebFront: number,
    suspCompRear: number,
    suspRebRear: number,
    suspGeomCamberFront: number,
    suspGeomCamberRear: number,
    arbFront: number,
    arbRear: number,
}