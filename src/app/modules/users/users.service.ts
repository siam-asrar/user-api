// only db logics here, no req/res

import User from './users.model'
import { IUser } from './users.interface'
import { generateUserId, generateRandomUserInfo, limitResults } from './users.utils'

/** requisition:
 * auto generated incremental id
 * default pass
 */

const generateRandomUser = async (user: IUser[]): Promise<IUser> => {
  const randomUser = await generateRandomUserInfo(user)
  return randomUser
}

const limitUser = async (user: IUser[], limit: number): Promise<IUser[]> => {
  const dataWithLimit = await limitResults(user, JSON.stringify(limit))
  return dataWithLimit
}

const createUser = async (user: IUser): Promise<IUser> => {
  const id = await generateUserId()

  user.id = id

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error(`Failed to create new user`)
  }

  return createdUser
}


export default {
  createUser,
  generateRandomUser,
  limitUser,
}
