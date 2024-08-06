export class UserRepository {
    constructor() {
        this.users = new Map();
    }

    findById(id) {
        return this.users.get(id);
    }

    create(userData) {
        const id = String(this.users.size + 1);
        const user = { id, ...userData };
        this.users.set(id, user);
        return user;
    }
}
