import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListUsersService from '../services/ListUsersService';

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUsers = container.resolve(ListUsersService);

      const users = await listUsers.execute();

      return response.json(users);
    } catch (error) {
      const err = error as Error;
      return response.status(400).json({ error: err.message });
    }
  }
}

export default ListUsersController;
