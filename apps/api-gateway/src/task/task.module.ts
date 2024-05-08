import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'task',
            brokers: ['localhost:29092'],

          },
          consumer: {
            groupId: 'task-consumer',
            // retry:
          },
        },
      },
    ]),
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule { }