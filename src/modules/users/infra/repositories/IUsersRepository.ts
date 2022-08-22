import User from '../local/entities/User';

export interface ICreateUser {
  name: string
  username: string;
  password: string;
}

export default interface IUsersRepository {
  create: (data: ICreateUser) => Promise<User>;
  all: () => Promise<User[]>;
  findOneById: (id: string) => Promise<User | undefined>;
  findOneByUsername: (username: string) => Promise<User | undefined>;
}
