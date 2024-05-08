import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class TaskService implements OnModuleInit {
  constructor(
    @Inject('TASK_MICROSERVICE') private readonly taskClient: ClientKafka
  ) { }

  onModuleInit() {
    this.taskClient.subscribeToResponseOf('topic_1');
  }

  makeTask(text: string, topic: string) {
    this.taskClient.send(topic, text);
    // .pipe(timeout(5000));
  }
}