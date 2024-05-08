import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get('task/:text')
  makeTask(@Param() text: string) {
    console.log(text);
    return this.taskService.makeTask(text, 'topic_1');
  }
}