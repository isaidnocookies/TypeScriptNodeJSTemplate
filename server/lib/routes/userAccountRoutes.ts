import { Request, Response } from 'express'
import { UserAccount } from '../api/UserAccount';

export class UserAccountRoutes {
    public routes (app) : any {
        app.route('/userAccount/').get((req: Request, res: Response) => {
            var userAccount : any = new UserAccount;
            res.status(200).send({message: "User account says, hello world!"})
        })

        app.post('/userAccount/create/', (req: Request, res: Response) => {
            var userAccount : any = new UserAccount;
            var lEmail : string = req.body.email;

            console.log("Creating user...");
            console.log("About to save user to db");

            userAccount.createAccount(lEmail).then(success => {
                if (!success) {
                    lEmail = "";
                }
                res.send(JSON.stringify({success: success, email: lEmail}));
            }).catch((error) => {
                res.send(JSON.stringify({success: false, message: `${error}`}));
            });
        });

        app.post('/userAccount/accountExists/', (req: Request, res: Response) => {
            var userAccount : any = new UserAccount;
            var lEmail : string = req.body.email;

            userAccount.checkEmail(lEmail).then(isFound => {
                res.status(200).send(JSON.stringify({success: isFound}));
            }).catch((error) => {
                res.send(JSON.stringify({success: false, message: `${error}`}));
            });;
        });
    }
}
