import { User } from "../classes/user.class.js"

function validatePassword(password: string): boolean {
   const uppercase = /[A-Z]/.test(password);
   const lowercase = /[a-z]/.test(password);
   const numbers = /[0-9]/.test(password);
   const special = /[\W]/.test(password);
   const whitespace = /[\s]/.test(password);

   if (uppercase && lowercase && numbers && special && whitespace && password.length >= 8 && password.length <= 120) return true;
   else return false;

}

function validateName(name: string) : boolean {
    if (name.length >= 1 && name.length <= 40 && !(/[А-Яа-я0-9]\W/.test(name))) return true;
    else return false;
}

function validateSurname(surname: string) {
    if(surname.length >= 1 && surname.length <= 100 && !(/[А-Яа-я0-9]\W\-/.test(surname))) return true;
    else return false;
}

function validateUsername(username: string) {
    if(username.length >= 1 && username.length <= 50 && !(/[А-Яа-я]\W\-/.test(username))) return true;
    else return false;
}

export function createUser(name: string, surname: string, username: string, password: string){

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
    // console.log(result());
    
}
// console.log(createUser('Test', 'Test', 'Test', 'tttttttt'))