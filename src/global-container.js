import { createContainer, asClass } from 'awilix';

import { UserController } from './controller/user.controller.js';
import { UserRepository } from './repository/user.repository.js';
import { UserService } from './service/user.service.js';

export const container = (() => {
    const _container = createContainer();

    _container.register({
        userRepository: asClass(UserRepository).singleton(),
        userService: asClass(UserService).scoped(),
        userController: asClass(UserController).scoped(),
    });

    return _container;
})();