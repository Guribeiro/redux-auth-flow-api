import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/CreateUserService';

interface Body {
  name: string;
  username: string;
  password: string;
}

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, username, password } = request.body as Body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        name,
        username,
        password,
      });

      return response.json(user);
    } catch (error) {
      const err = error as Error;
      return response.status(400).json({ error: err.message });
    }
  }
}

export default CreateUserController;
