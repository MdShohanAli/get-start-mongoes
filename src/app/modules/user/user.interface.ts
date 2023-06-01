import User from "./user.model";

export interface IUser {
    id: string;
    role: string;
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contractNo: string;
    emergencyContractNo: string;
    permanentAddress: string;
}

