import { Request, Response } from 'express';

export class Routes {
    public routes (app) : void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({message: "Get!"})
        });

        app.post('/', (req: Request, res: Response) => {
          var data : String = "";
          try{
            data = req.body.data;
          } catch {
            data = "";
          }
            res.status(200).send({message: "Hello, world" + data})
        });
    }
}
