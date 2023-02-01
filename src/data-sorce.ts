import "reflect-metadata";
import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "warsaw_team_settings_car_for_the_crew_2",
    logging: true,
    synchronize: true,
    entities: ["src/entity/*.ts"],
    subscribers: [],
    migrations: [],
})