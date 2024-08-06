export class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async getUser(id) {
        // Business logic to get a user by ID
        return this.userRepository.findById(id);
    }

    async createUser(userData) {
        return this.userRepository.create(userData);
    }
}

