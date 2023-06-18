import { Request, Response } from 'express';

class Controller {
  index(req: Request, res: Response): Response {
    return res.json({
      message:
        'Hello! This is a initial setup for your ts-express project. Feel free to use as you want and dont\'t forget give me a star on my GitHub profile if u like it! :)',
    });
  }
}

export default new Controller;
