import dotenv from 'dotenv';
import AWS from 'aws-sdk';

import { Task } from '../types/Task';

dotenv.config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION,
  });

const dynamodb = new AWS.DynamoDB.DocumentClient();

class TaskService {
    async createTask(task: Task) {
        const params = {
            TableName:  process.env.DB_NAME || '',
            Item: task,
        };

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