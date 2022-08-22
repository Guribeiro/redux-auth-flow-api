import { injectable, inject } from 'tsyringe';
import User from '../../infra/local/entities/User';
import IUsersRepository from '../../infra/repositories/IUsersRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.all();

    return users;
  }
}

export default ListUsersService;
