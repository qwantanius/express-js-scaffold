import { makeInvoker } from 'awilix-express';

import { UserController } from './controller/user.controller.js';

export function registerAllRoutes(app) {
    const api = makeInvoker(UserController);

    app.get('/user/:id', api('getUser'));
    app.post('/user', api('createUser'));

    return api;
}
