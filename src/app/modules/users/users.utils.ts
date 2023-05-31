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
  const findLastUserId = async () => {
    const maxId = data.find(data => Math.max(parseInt(data.id)))
    const lastUser = maxId;
    return lastUser
  }
  const currentId = await findLastUserId() || (0).toString().padStart(5, '0')
  const incrementedId = parseInt(currentId as string) + 1
  return incrementedId.toString().padStart(5, '0')
}