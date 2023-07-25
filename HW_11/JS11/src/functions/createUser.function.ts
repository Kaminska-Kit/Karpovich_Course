import { User } from "../classes/user.class.js"
import { typeUser } from "../types/user.type.js";

export function validatePassword(password: string): boolean {
   const uppercase = /[A-Z]/.test(password);
   const lowercase = /[a-z]/.test(password);
   const numbers = /[0-9]/.test(password);
   const special = /[^\sA-Za-z0-9]/.test(password);
   const whitespace = /\s/.test(password);

   if (uppercase && lowercase && numbers && special && whitespace && password.length >= 8 && password.length <= 120) return true;
   else return false;

}

export function validateName(name: string) : boolean {
    if (name.length >= 1 && name.length <= 40 && !(/[^A-Za-z]/).test(name)) return true;
    else return false;
}

export function validateSurname(surname: string) : boolean {
    if(surname.length >= 1 && surname.length <= 100 && !(/[^A-Za-z-]/).test(surname)) return true;
    else return false;
}

export function validateUsername(username: string) : boolean {
    if(username.length >= 1 && username.length <= 50 && !(/[^A-Za-z0-9-_]/).test(username)) return true;
    else return false;
}

export function createUser(name: string, surname: string, username: string, password: string) {

    if(!validateName(name)) {
        throw new Error ('Invalid name');
    }

    if (!validateSurname){
        throw new Error ('Invalid surname');
    }

    if(!validateUsername(username)) {
        throw new Error ('Invalid username');
    };

    if(!validatePassword(password)) {
        throw new Error ('Invalid password');
    };

    const result = new User(name, surname, username, password);
    return result;
}

const user = createUser('test', 'Te-st', 'Test656_-', 'tT*000 000')

console.log(user.name)

// console.log(createUser('test', 'Te-st', 'Test656_-', 'tT*000 000'))