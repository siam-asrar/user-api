import { IUser } from './users.interface'
import { generateRandomUserInfo, limitResults } from './users.utils'

const generateRandomUser = async (user: IUser[]): Promise<IUser> => {
  const randomUser = await generateRandomUserInfo(user)
  return randomUser
}

const limitUser = async (user: IUser[], limit: number): Promise<IUser[]> => {
  const dataWithLimit = await limitResults(user, JSON.stringify(limit))
  return dataWithLimit
}

export default {
  generateRandomUser,
  limitUser
}
