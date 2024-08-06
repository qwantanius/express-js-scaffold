export class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    async getUser(req, res, next) {
        try {
            const user = await this.userService.getUser(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
        try {
            const newUser = await this.userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
}
