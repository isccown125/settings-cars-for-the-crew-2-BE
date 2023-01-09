

export enum autoClimbControl {
    on = 1,
    off = 0,
}
export enum knifeFlightAssist {
    on = 1,
    off = 0,
}
export enum automaticLandingGear {
    on = 1,
    off = 0,
}

export type SettingsPlaneEntity = {
    id: string,
    vehicleId: string,
    autoClimbControl: autoClimbControl,
    knifeFlightAssist: knifeFlightAssist,
    automaticLandingGear: automaticLandingGear,
    groundCushion: number,
    groundEffect: number,
    planeReactivity: number,
    stall: number,
    wingsDihedralAngle: number,
    yawBriskness: number,
    pitchBriskness: number,
    rollBriskness: number,
    wingsIncidence: number
};

export type SettingsPlaneReq = {
    vehicleId: string,
    autoClimbControl: autoClimbControl,
    knifeFlightAssist: knifeFlightAssist,
    automaticLandingGear: automaticLandingGear,
    groundCushion: number,
    groundEffect: number,
    planeReactivity: number,
    stall: number,
    wingsDihedralAngle: number,
    yawBriskness: number,
    pitchBriskness: number,
    rollBriskness: number,
    wingsIncidence: number
};

export type SettingsPlaneRes = {
    id?: string,
    vehicleId: string,
    autoClimbControl: autoClimbControl,
    knifeFlightAssist: knifeFlightAssist,
    automaticLandingGear: automaticLandingGear,
    groundCushion: number,
    groundEffect: number,
    planeReactivity: number,
    stall: number,
    wingsDihedralAngle: number,
    yawBriskness: number,
    pitchBriskness: number,
    rollBriskness: number,
    wingsIncidence: number
};
