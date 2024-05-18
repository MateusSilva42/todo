import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class TasksDB extends cdk.Stack {
  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, "Tasks", {
      partitionKey: {
        name: "id",
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: "createdAt",
        type: dynamodb.AttributeType.STRING
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      encryption: dynamodb.TableEncryption.AWS_MANAGED,
    });

    new cdk.CfnOutput(this, 'TasksTableName', {
    value: table.tableName,
});
    this.table = table;

  }
}

const app = new cdk.App();
new TasksDB(app, 'TasksDB');