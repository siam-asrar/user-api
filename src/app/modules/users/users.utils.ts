import { IUser } from './users.interface'
import User from './users.model'

export const limitResults = async (user: IUser[], limit: string): Promise<IUser[]> => {
  return user.slice(0, parseInt(limit));
}

export const generateRandomUserInfo = async (user: IUser[]) => {
  const randomIndex = Math.floor(Math.random() * user.length);
  return user[randomIndex];
}

export const generateUserId = async () => {
  const findLastUserId = async () => {
    const lastUser = await User.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1, }).lean()
    return lastUser?.id
  }
  const currentId = await findLastUserId() || (0).toString().padStart(5, '0')
  const incrementedId = parseInt(currentId) + 1
  return incrementedId.toString().padStart(5, '0')
}