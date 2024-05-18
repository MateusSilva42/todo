import taskService from '../services/task';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

class TaskController {
    async createTask(req: Request, res: Response) {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são de 0 a 11, então adicionamos 1
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;


        const task = {
            id: uuidv4(),
            title: req.body.title,
            createdAt: formattedDate,
        }

        try {
            console.log('Creating task', task);
            
            await taskService.createTask(task);
            res.status(201).end();
        } catch (error: unknown) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await taskService.getTasks();
            res.json(tasks);
        } catch (error: unknown) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async deleteTask(req: Request, res: Response) {
        const id = req.params.id;
        const createdAt = decodeURIComponent(req.params.created);


        try {
            await taskService.deleteTask(id, createdAt);
            res.status(204).end();
        } catch (error: unknown) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default new TaskController();