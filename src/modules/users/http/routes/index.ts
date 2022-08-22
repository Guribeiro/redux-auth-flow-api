import { Router } from 'express';

import CreateUserController from '../controllers/CreateUserController';
import ListUsersController from '../controllers/ListUsersController';

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const usersRouter = Router();

usersRouter.post('/', createUserController.handle);
usersRouter.get('/', listUsersController.handle);

export default usersRouter;
