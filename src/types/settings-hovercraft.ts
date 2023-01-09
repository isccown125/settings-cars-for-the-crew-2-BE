export type SettingsHovercraftEntity = {
    id: string,
    vehicleId: string,
    airAssistance: number,
    spinBreakAssistance: number,
    breakingPower: number,
    pitchStiffness: number,
    rollStiffness: number,
    oversteering:  number,
    gripFactor: number,
};

export type SettingsHovercraftReq = {
    vehicleId: string,
    airAssistance: number,
    spinBreakAssistance: number,
    breakingPower: number,
    pitchStiffness: number,
    rollStiffness: number,
    oversteering:  number,
    gripFactor: number,
};

export type SettingsHovercraftRes = {
    id?: string,
    vehicleId: string,
    airAssistance: number,
    spinBreakAssistance: number,
    breakingPower: number,
    pitchStiffness: number,
    rollStiffness: number,
    oversteering:  number,
    gripFactor: number,
};