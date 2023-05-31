import { Request, Response } from 'express'
import usersService from './users.service'
import data from './dummy-data.json';

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

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = data.find(data => data.id === id) || {};
    res.status(200).json({
      success: true,
      message: `User Data: Showing for user id - ${id}`,
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to load User data',
    });
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const user = req.body;
    const result = await usersService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    });
  }
}


export default {
  createUser,
  getAllUsers,
  generateRandomUser,
  getUserById
}
