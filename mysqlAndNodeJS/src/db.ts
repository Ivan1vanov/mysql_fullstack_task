import {Sequelize} from 'sequelize'

// host: 'localhost',
// port: 3306,
// password: 'password',
// user: 'root',
// database: 'firstdatabase',

const connectDB = new Sequelize(
    'somedatabase',
    'root',
    'password', 
    { 
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,

        pool: {
            max: 5,
            min: 0
        }
    }

)

export default connectDB