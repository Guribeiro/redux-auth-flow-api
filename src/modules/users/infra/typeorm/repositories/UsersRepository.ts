import IUsersRepository, {
  ICreateUser,
} from '../../repositories/IUsersRepository';
import User from '../entities/User';
import { Repository, getRepository } from 'typeorm';

class UsersRepository implements IUsersRepository {
  private readonly usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  public async create({ name, username, password }: ICreateUser): Promise<User> {
    const user = this.usersRepository.create({
      name,
      username,
      password,
    });

    await this.usersRepository.save(user);

    return user;
  }

  public async all(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  public async findOneById(id: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  public async findOneByUsername(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { username } });
  }
}

export default UsersRepository;
