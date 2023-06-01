import { Request, Response } from 'express'
import usersService from './users.service'
import data from './dummy-data.json';
import { generateUserId } from './users.utils';
import { IUser } from './users.interface';

const generateRandomUser = async (req: Request, res: Response) => {
  const result = await usersService.generateRandomUser(data);

  try {
    res.status(200).json({
      success: true,
      message: `Random User Data: Showing for user id - ${result.id}`,
      data: result
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User data',
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  const { limit } = req.query;

  let result;

  if (typeof limit === 'string') {
    result = await usersService.limitUser(data, parseInt(limit));
  } else {
    result = data
  }

  try {
    res.status(200).json({
      success: true,
      message: `User List: ${result.length} out of ${data.length} Users Loaded`,
      data: result
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User List',
    })
  }
}

const createUser = async (req: Request, res: Response) => {
  const user: IUser = req.body
  const id = await generateUserId()

  try {
    user.id = id
    data.push(<IUser>user)
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: data.find(data => data.id === id),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    });
  }
}

const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = <IUser>req.body;

  let result;

  let match = data.find(data => data.id === id);

  if (match) {
    user.id = id
    result = match = <IUser>user
  } else {
    result = 'No user found with that id'
  }

  try {
    res.status(200).json({
      success: true,
      message: `User Data updated for user id - ${id}`,
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User data',
    });
  }
}

const bulkUpdateUsers = async (req: Request, res: Response) => {
  const user = <IUser>req.body;
  const match = data.filter(data => data.id === user.id);

  let result;

  if (match) {
    match.forEach(match => {
      if (match.id) {
        match = <IUser>user
      }
    });
  } else {
    result = 'No user found with that id'
  }

  try {
    res.status(200).json({
      success: true,
      message: `Bulk Updated User data`,
      data: user
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User data',
    });
  }
}

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = data.filter(data => data.id !== id);

  try {
    res.status(200).json({
      success: true,
      message: `User Data deleted for user id - ${id}`,
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User data',
    });
  }
}

export default {
  generateRandomUser,
  getAllUsers,
  createUser,
  updateUserById,
  bulkUpdateUsers,
  deleteUser
}
