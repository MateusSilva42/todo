import TaskController from '../controllers/task';
import { Router } from 'express';

export function taskRouter(): Router {
    const router = Router();

    router.post('/', TaskController.createTask);
    router.get('/', TaskController.getTasks);
    router.delete('/:id/:created', TaskController.deleteTask);

    return router;
}