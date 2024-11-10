import { compare, hash } from "bcrypt";
import { IloginDto } from "../DTOs/login";
import UserModle from "../models/User";
import { IUser } from "../interface/user";



export const loginUser = async (user: IloginDto) => {
    try {
        const userFromDB = await UserModle.findOne({ name: user.name })
        if (!userFromDB) {
            throw new Error('User not found');
        }
        const match = await compare(user.password, userFromDB.password)
        if (!match) {
            throw new Error('Invalid password');
        }
        return userFromDB;
    } catch (error) {
        console.log(error);
        throw error;

    }
}

export const createUser = async (user: IUser): Promise<IUser> => {
    try {
        // find  if user is already
        const existingUser = await UserModle.findOne({ name: user.name }) as IUser;
        if (existingUser) {
            throw new Error('user already exists for this user');
        }
        const { name, password } = user
        const hashp = await hash(password, 10)
        // find mission to create new status 

        const dbUser = new UserModle({
            name,
            password: hashp,
        });
        await dbUser.save()
        return user;
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getUser = async () => {
    try {
        // find all users
        const users = await UserModle.find().populate("candidates");
        return users;
    } catch (err) {
        console.log(err);
        throw err
    }
}