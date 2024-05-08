import { Injectable, Scope } from '@nestjs/common';

@Injectable()
// @Injectable({ scope: Scope.REQUEST })
export class AppService {

  processTask(text: string) {
    console.log(`process task: ${text}`);

    return new Promise((resolve, reject) => {
      console.log(`Start a task`);
      setTimeout(() => {
        if(new Date().getMilliseconds() % 7 == 0){
          console.error(`A task failed`);
          reject('FAIL');
        }
        console.log(`End a task`);
        resolve('SUCCESS');
      }, 1000);
    });
  }

}