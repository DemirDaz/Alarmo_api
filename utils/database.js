import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('logindb', 'doadmin', 'kULjWVBjOVHlOD42', {
    host: 'db-mysql-fra1-01473-do-user-9904344-0.b.db.ondigitalocean.com',
	port: 25060,
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

export default sequelize;