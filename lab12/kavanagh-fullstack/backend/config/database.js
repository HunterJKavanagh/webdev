import {Sequelize} from 'sequelize';

const db = new Sequelize("kavanagh-db", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {timestamps: false},
});

export default db;