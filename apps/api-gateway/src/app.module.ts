import { Module } from '@nestjs/common'
import { TaskModule } from './task/task.module';


@Module({
  imports: [
    AppModule,
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
