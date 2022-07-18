import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

// get/users
// get/users/:uuid
// post/users
// put/users/:uuid
// delete/users/:uuid

const usersRoute = Router();

// get/users - Mostrar usuários
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Matheus" }];
    res.status(StatusCodes.OK).send(users);
});

// get/users/:uuid - Mostrar usuário pelo id
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

// post/users - Criar um usuário
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

// put/users/:uuid - Alterar um usuário
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(modifiedUser)
});

// delete/users/:uuid - Excluir um usuário
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;