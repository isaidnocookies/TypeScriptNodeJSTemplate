import * as mongoose from 'mongoose';
import { UserAccountSchema } from '../models/userAccountModel';
import { Config } from "../config/config";

class UserAccount {

    config : any = new Config();

    createAccount(iEmail : String) {
        var UserAccountObject : any = mongoose.model('UserAccountObject', UserAccountSchema);
        var email : string = iEmail.toLowerCase();

        return this.checkEmail(email).then(isFound => {
            if (isFound) {
                console.log("User already exists");
                return false;
            } else {
                const newUser = new UserAccountObject({recordtype: "user", email: email, version: "1.0.0"});
                return newUser.save().then(() => {
                    console.log('New user was saved to db');
                    return true;
                }).catch(() => {
                    console.log("failed to save...");
                    return false;
                });
            }
        });
    }

    checkEmail(iEmail : string) {
        var email : string = iEmail.toLowerCase();
        var UserAccountObject : any = mongoose.model('UserAccountObject', UserAccountSchema);
        return UserAccountObject.find({email : email}).then(docs => {
            if (docs.length){
                console.log('User exists: ', email);
                return true;
            } else {
                return false;
            }
        });
    }

    validateEmail(iEmail : string) {
      // check if valid email...
        if (iEmail.length < 32) {
            return true;
        }
        return false;
    }
}

export { UserAccount };
