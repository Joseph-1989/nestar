import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	getHello(): string {
		return 'Hello, Welcome to NESTAR BATCH SERVER!';
	}
}
