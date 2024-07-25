import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_blog_db', 'freedb_yasmeen', 'R@BJ4nZAt#7Kr96', {
    host: 'sql.freedb.tech',
    port: 3306,
    dialect: 'mysql'
});
export const connectDb=async()=>{
    try{
        return await sequelize.sync();

    }catch (error){
        console.log("error to connect db");
    }
}

export default connectDb;
