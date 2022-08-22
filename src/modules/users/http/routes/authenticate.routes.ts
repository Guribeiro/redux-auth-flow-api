import { Router } from 'express';

import AuthenticateUserController from '../controllers/AuthenticateUserController';

const authenticateUserController = new AuthenticateUserController();

const authenticateRouter = Router();

authenticateRouter.post('/', authenticateUserController.handle);

export default authenticateRouter;
