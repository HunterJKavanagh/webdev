import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const State = db.define('midwest-states', {
    Name: {type: DataTypes.STRING},
    Population: {type: DataTypes.INTEGER},
    GDP: {type: DataTypes.INTEGER},
    Area: {type: DataTypes.INTEGER}
}, {freezeTableName: true});

export default State;