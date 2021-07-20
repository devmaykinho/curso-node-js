import * as userService from '../../src/services/user.js';

const mockUserDataValid = {
    "username" : "maycon",
    "password": "123"
}

const mockUserDataInvalid = {
    "username" : "",
    "password": ""
}

describe('User Validation', () => {
    test('User is valid', () => {
        const result = userService.validateRequiredFields(mockUserDataValid);

        expect(result).toBe(true);
    });

    test('User is not valid', () => {
        const result = userService.validateRequiredFields(mockUserDataInvalid);

        expect(result).toBe(false);
    });    

    test('Password should be valid', () => {
        const result = userService.validatePassword('Teste1');

        expect(result).toBe(true);
    });      
    
    test('Password should be invalid', () => {
        const result = userService.validatePassword('teste');

        expect(result).toBe(false);
    });    

})