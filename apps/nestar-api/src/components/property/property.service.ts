import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertyModule } from './property.module';

@Injectable()
export class PropertyService {
	constructor(@InjectModel('Property') private readonly propertyModel: Model<null>) {}
}
