
import { Model } from 'mongoose'
import { IUser } from './users.interface'
import data from './dummy-data.json';

type UserModel = Model<IUser, {
  id: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
}>

const User = <UserModel><unknown>(data)


export default User