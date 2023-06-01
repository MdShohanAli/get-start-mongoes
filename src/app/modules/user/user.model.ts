import { model, Schema } from "mongoose"
import { IUser } from "./user.interface"

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true,

    },
    role: {
        type: String,
        required: true,
        unique: true,



    },
    password: {
        type: String,
        require: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,

        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {
        type: String,

    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    email: {
        type: String,
    },
    contractNo: {
        type: String,
        required: true,
    },
    emergencyContractNo: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },

})


const User = model<IUser>('User', userSchema)

export default User; 