
import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
  },
  // this will set the fields "createdAt" & "updatedAt" by default in Mongo like ObjectId
  { timestamps: true }
)

const User = model<IUser, UserModel>('User', userSchema)

export default User