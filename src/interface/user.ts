import mongoose, { ObjectId } from "mongoose";

export interface IUser extends mongoose.Document {
    name: string,
    password: string,
    isAdmin?: boolean,
    hasVoted?: boolean,
    votedFor?: string |null,
}