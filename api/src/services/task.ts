import dotenv from 'dotenv';
import AWS from 'aws-sdk';

import { Task } from '../types/Task';

dotenv.config();

AWS.config.update({ region: 'sa-east-1' });
console.log('Region set to', AWS.config.region); // Deve imprimir "Region set to us-east-1"

const dynamodb = new AWS.DynamoDB.DocumentClient();

class TaskService {
    async createTask(task: Task) {
        const params = {
            TableName:  process.env.DB_NAME || '',
            Item: task,
        };

        console.log('>>>Task service', task);
        console.log('>>>>PArams', params);
        

        await dynamodb.put(params).promise();

        return task;
    }
    
    async getTasks() {
        const params = {
            TableName: process.env.DB_NAME || '',
        };

        const response = await dynamodb.scan(params).promise();
        return response.Items;
    }

    async deleteTask(taskId: string, createdAt: string) {
        const params = {
            TableName: process.env.DB_NAME || '',
            Key: {
                id: taskId,
                createdAt,
            },
        };

        await dynamodb.delete(params).promise();
    }
}

export default new TaskService();