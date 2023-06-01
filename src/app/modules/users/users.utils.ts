import { IUser } from './users.interface'
import data from './dummy-data.json';

export const limitResults = async (user: IUser[], limit: string): Promise<IUser[]> => {
  return user.slice(0, parseInt(limit));
}

export const generateRandomUserInfo = async (user: IUser[]) => {
  const randomIndex = Math.floor(Math.random() * user.length);
  return user[randomIndex];
}

export const generateUserId = async () => {
  const currentId = data.length
  const incrementedId = currentId + 1
  return incrementedId.toString()
}
