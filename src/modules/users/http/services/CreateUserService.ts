import { injectable, inject } from 'tsyringe';
import User from '../../infra/local/entities/User';
import UsersRepository from '../../infra/repositories/IUsersRepository';

interface Request {
  name: string;
  username: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  public async execute({ name, username, password }: Request): Promise<User> {

    const findUserWithSameUsername = await this.usersRepository.findOneByUsername(username);

    if(findUserWithSameUsername){
      throw new Error('username is already been used');
    }

    const user = await this.usersRepository.create({
      name,
      username,
      password,
    });

    return user;
  }
}

export default CreateUserService;
