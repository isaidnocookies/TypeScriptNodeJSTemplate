export class Config
{
    localEnvironment : boolean = true;

    port : number = 3333;

    authentication : any = {
        password: "pass"
    };

    db : any = {
        production : {
            url: "mongodb+srv://user:pass@url/db?retryWrites=true&w=majority"
        },
        test : {
            url: "mongodb+srv://user:pass@url/db?retryWrites=true&w=majority"
        }
    };
}
