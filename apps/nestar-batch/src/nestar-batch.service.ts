import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarBatchService {
  getHello(): string {
    return 'Hello, Welcome to NESTAR BATCH SERVER!';
  }
}
