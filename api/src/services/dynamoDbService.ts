import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });
console.log('Region set to', AWS.config.region); // Deve imprimir "Region set to us-east-1"

const dynamodb = new AWS.DynamoDB.DocumentClient();

export class DynamoDbService {
  tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async getItems() {
    const params = {
      TableName: this.tableName,
    };
    const response = await dynamodb.scan(params).promise();
    return response.Items;
  }

    async putItem(item: any) {
        const params = {
        TableName: this.tableName,
        Item: item,
        };
        await dynamodb.put(params).promise();
    }

    async deleteItem(key: any) {
        const params = {
        TableName: this.tableName,
        Key: key,
        };
        await dynamodb.delete(params).promise();
    }
    
}