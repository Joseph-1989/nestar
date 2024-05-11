import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';

@Injectable()
export class MemberService {
	constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}
	public async signup(input: MemberInput): Promise<Member> {
		try {
			const result = await this.memberModel.create(input);
			return result;
		} catch (err) {
			console.log('Error: Service.model:', err);
			throw new BadRequestException(err);
		}
	}

	public async login(input: LoginInput): Promise<Member> {
		try {
			const result = await this.memberModel.create(input);
			return result;
		} catch (err) {
			console.log('Error: Model.service:', err);
			throw new InternalServerErrorException(err);
		}
	}

	public async updateMember(input: MemberInput): Promise<Member> {
		try {
			const result = await this.memberModel.create(input);
			return result;
		} catch (err) {
			console.log('Error: Model.service:', err);
			throw new InternalServerErrorException(err);
		}
	}

	public async getMember(input: MemberInput): Promise<Member> {
		try {
			const result = await this.memberModel.create(input);
			return result;
		} catch (err) {
			console.log('Error: Model.service:', err);
			throw new InternalServerErrorException(err);
		}
	}
}
