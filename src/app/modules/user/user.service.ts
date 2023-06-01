import User from "./user.model";

export const createUserToDB = async () => {

    const user = await new User({
        id: "80898",
        role: "student77",
        password: 'janinas33 ',
        name: {
            firstName: ' postvai23',
            middleName: 'shohag',
            lastName: 'ali',
        },
        gender: "male",
        email: 'abc @gmail.com',
        contractNo: '545434',
        emergencyContractNo: '454521',
        permanentAddress: 'aligor'
    });
    await user.save();
    return user;


};

export const getUsersFromDB = async () => {
    const users = await User.find()
    return users;
}