import { Request, Response } from 'express'
import usersService from './users.service'
import data from './dummy-data.json';
import { generateUserId } from './users.utils';

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
      message: `User List: ${result.length} out of ${data.length} Users Loaded!`,
      data: result
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User List',
    })
  }
}

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

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const id = await generateUserId()
  const result = data.push(user)

  try {
    user.id = id
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
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
  const { user } = req.body;

  let result;

  result = data.find(data => data.id === id);

  if (result) {
    result = data.push(result, user)
  } else {
    result = 'No matching user found by ${id}'
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
  const [user] = req.body;
  const result = data.filter(data => data.id === user.id);

  try {
    res.status(200).json({
      success: true,
      message: `User Data bulk updated`,
      data: result.push(user),
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
  getAllUsers,
  generateRandomUser,
  createUser,
  updateUserById,
  bulkUpdateUsers,
  deleteUser
}
