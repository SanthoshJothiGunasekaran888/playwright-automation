module.exports = {
    validUser: {
        username: 'testuser@example.com',
        password: 'Test@123',
        expectedMessage: 'Welcome, Test User!'
    },
    invalidUser: {
        username: 'wrong@example.com',
        password: 'WrongPass123',
        expectedError: 'Invalid username or password'
    }
};