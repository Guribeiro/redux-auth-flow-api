import IUsersRepository, {
  ICreateUser,
} from '../../repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private readonly users: User[] = [];

  public async create({ username, password }: ICreateUser): Promise<User> {
    const user = new User({
      username,
      password,
    });

    this.users.push(user);

    return user;
  }

  public async all(): Promise<User[]> {
    return this.users;
  }
}

export default UsersRepository;
