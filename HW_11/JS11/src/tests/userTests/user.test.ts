import { User } from "../../classes/user.class.js";
import  { createUser }  from "../../functions/createUser.function.js";
import { typeUser } from "../../types/user.type.js"
import { expect } from 'chai'

describe ('Valid data tests', () => {
    it('Should create user with valid data', () => {
        const result = createUser('test', 'te-st', 't_e-st', 'Test11 @');
        expect(result.name).to.equal('test')
        expect(result.surname).to.equal('te-st')
        expect(result.username).to.equal('t_e-st')
        expect(result.password).to.equal('Test11 @')
    })

})

describe ('Invalid name tests', () => {

    it('Should not create user with numbers in name', () => {
        try {
        createUser('test123', 'te-st', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid name")
        }
    })
    it('Should not create user with special characters in name', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid name")
        }
    })
    it('Should not create user with name length > 40', () => {
        try {
        createUser('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest', 'te-st', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid name")
        }
    })
    it('Should not create user with empty name', () => {
        try {
        createUser('', 'te-st', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid name")
        }
    })
    it('Should not create user with cyrillic charaters in name', () => {
        try {
        createUser('тест', 'te-st', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid name")
        }
    })
})

describe ('Invalid surname tests', () => {

    it('Should not create user with numbers in surname', () => {
        try {
        createUser('test', 'te-st66', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid surname")
        }
    })
    it('Should not create user with special characters except "-" in surname', () => {
        try {
        createUser('test', 'test%', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid surname")
        }
    })
    it('Should not create user with surname length > 100', () => {
        try {
        createUser('test', 'teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid surname")
        }
    })
    it('Should not create user with empty surname', () => {
        try {
        createUser('test', '', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid surname")
        }
    })
    it('Should not create user with cyrillic charaters in surname', () => {
        try {
        createUser('test', 'тест', 't_e-st', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid surname")
        }
    })
})

describe ('Invalid username tests', () => {


    it('Should not create user with special characters except "-" and "_" in username', () => {
        try {
        createUser('test', 'te-st', 'test!', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid username")
        }
    })
    it('Should not create user with username length > 50', () => {
        try {
        createUser('test', 'te-st', 'teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid username")
        }
    })
    it('Should not create user with empty username', () => {
        try {
        createUser('test', 'te-st', '', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid username")
        }
    })
    it('Should not create user with cyrillic charaters in username', () => {
        try {
        createUser('test', 'te-st', 'тест', 'Test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid username")
        }
    })
})

describe ('Invalid password tests', () => {

    it('Should not create user with password length < 8', () => {
        try {
        createUser('test', 'test', 'test', 'Test 1@');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user with password length > 120', () => {
        try {
        createUser('test', 'test', 'test', 'Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user without special characters in password', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'Test11 1');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user without numbers in password', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'Teeest @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user without whitespace in password', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'Test111@');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user without uppercase letter in password', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'test11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user without lowercase letter in password', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'TEST11 @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
    it('Should not create user with cyrillic charaters in password', () => {
        try {
        createUser('test', 'te-st', 't_e-st', 'Test11ф @');
        } catch (error: any) {
            expect(error.message).to.equal("Invalid password")
        }
    })
})