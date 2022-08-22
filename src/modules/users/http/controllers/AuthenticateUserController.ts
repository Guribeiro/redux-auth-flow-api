import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '../services/AuthenticateUserService';

interface Body {
  username: string;
  password: string;
}

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body as Body;

      const authenticateUser = container.resolve(AuthenticateUserService);

      const {user, token } = await authenticateUser.execute({
        username,
        password,
      });

      return response.json({ user, token });
    } catch (error) {
      const err = error as Error;
      return response.status(400).json({ error: err.message });
    }
  }
}

export default AuthenticateUserController;
