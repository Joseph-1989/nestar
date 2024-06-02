import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	public async batchRollback(): Promise<void> {
		console.log('batch rollback');
		// Your implementation here
	}

	public async batchProperties(): Promise<void> {
		console.log('batch properties');
		// Your implementation here
	}

	public async batchAgents(): Promise<void> {
		console.log('batch agents');
		// Your implementation here
	}

	getHello(): string {
		return 'Hello, Welcome to NESTAR BATCH SERVER!';
	}
}
