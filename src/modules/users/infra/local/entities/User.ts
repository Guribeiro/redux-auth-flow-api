import { v4 } from 'uuid';

class User {
  id: string;

  username: string;

  password: string;

  constructor({ password, username }: Omit<User, 'id'>) {
    const id = v4();

    this.id = id;
    this.username = username;
    this.password = password;
  }
}

export default User;
