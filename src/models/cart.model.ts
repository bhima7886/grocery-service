import { Sequelize,DataTypes } from "sequelize";
import { auditColumns } from "../shared/utils/sequelize-model-helper";


const MycartModel=(sequelize:any,_Sequelize:any)=>{
    const mycart = sequelize.define(
        'mycart',
        {
           // eslint-disable-next-line @typescript-eslint/indent
           id: {
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey:true,
            },
            title:{
                type:DataTypes.STRING,
                allowNull:false
            },
            description:{
                type:DataTypes.STRING,
                allowNull:true
            },
            price:{
                type:DataTypes.STRING,
                allowNull:false,
            },
           
            image:{
                type:DataTypes.STRING,
                allowNull:true
            },
            ...auditColumns
    
        }
    )

    return mycart;

}

export default MycartModel;

