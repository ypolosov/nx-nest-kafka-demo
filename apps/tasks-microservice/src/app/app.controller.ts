import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('topic_1')
  handleTopic1(@Payload() data: { text: string }, @Ctx() context: KafkaContext) {
    const heartbeat = context.getHeartbeat();
    const {text} = data;
    console.log(text)
    return this.appService.processTask(text);
  }
}