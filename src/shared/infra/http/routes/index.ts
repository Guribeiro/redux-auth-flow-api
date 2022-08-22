import { Router } from 'express';
import usersRouter from '../../../../modules/users/http/routes';
import authenticateRouter from '../../../../modules/users/http/routes/authenticate.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/signin', authenticateRouter);

export default routes;
