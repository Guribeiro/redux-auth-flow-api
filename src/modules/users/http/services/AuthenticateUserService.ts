import { injectable, inject } from 'tsyringe';
import User from '../../infra/local/entities/User';
import UsersRepository from '../../infra/repositories/IUsersRepository';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../../config/auth'

interface Request {
  username: string;
  password: string;
}

interface Response {
  token: string;
  user: User,
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) { }

  public async execute({ username, password }: Request): Promise<Response> {
    const user = await this.usersRepository.findOneByUsername(username);

    if (!user) {
      throw new Error('incorrect username/password');
    }

    const passwordMatch = password === user.password;

    if (!passwordMatch) {
      throw new Error('incorrect username/password');
    }

    const { jwt } = authConfig;

    const { expiresIn, secret } = jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      token,
      user
    }
  }
}

export default AuthenticateUserService;
