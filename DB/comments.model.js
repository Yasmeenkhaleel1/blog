import { DataTypes, Sequelize} from "sequelize";
import {sequelize} from './connection.js'
import userModel from "./user.model.js";

const commentsModel= sequelize.define('Comments',
    {
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        default:userModel,
        },
      blogId:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
       } ,

      userId:{
        type:DataTypes.STRING,
        allowNull:false,
       },
      
    });
export default commentsModel;