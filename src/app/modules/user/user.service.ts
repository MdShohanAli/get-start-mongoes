
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {

    const user = new User(payload)
    await user.save();
    return user;


};

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const use = await User.findOne({ id: payload }, { name: 1, contractNo: 1 })
    return use;
}

//  instance   method --> instance er method
// class instance + Method -> instance method  