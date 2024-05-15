import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Message } from '../../libs/enums/common.enum';
import { MemberStatus } from '../../libs/enums/member.enum';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MemberService {
	constructor(
		@InjectModel('Member') private readonly memberModel: Model<Member>,
		private authService: AuthService,
	) {}

	public async signup(input: MemberInput): Promise<Member> {
		input.memberPassword = await this.authService.hashPassword(input.memberPassword);

		try {
			const result = await this.memberModel.create(input);
			return result;
		} catch (err) {
			console.log('Error: Service.model:', err.message);
			throw new BadRequestException(Message.USED_MEMBERS_NICK_OR_PHONE);
		}
	}

	public async login(input: LoginInput): Promise<Member> {
		const { memberNick, memberPassword } = input;
		const response: Member = await this.memberModel.findOne({ memberNick: memberNick }).select('+memberPassword');
		if (!response || response.memberStatus == MemberStatus.DELETE) {
			throw new InternalServerErrorException(Message.NO_MEMBER_NICK);
		} else if (response.memberStatus == MemberStatus.BLOCK) {
			throw new InternalServerErrorException(Message.BLOCKED_USER);
		}

		console.log('response of login:', response);
		const isMatch = await this.authService.comparePasswords(input.memberPassword, response.memberPassword);
		if (!isMatch) throw new InternalServerErrorException(Message.WRONG_PASSWORD);
		return response;
	}
}

// public async updateMember(input: MemberInput): Promise<Member> {
// 	try {
// 		const result = await this.memberModel.create(input);
// 		return result;
// 	} catch (err) {
// 		console.log('Error: Model.service:', err);
// 		throw new InternalServerErrorException(err);
// 	}
// }

// public async getMember(input: MemberInput): Promise<Member> {
// 	try {
// 		const result = await this.memberModel.create(input);
// 		return result;
// 	} catch (err) {
// 		console.log('Error: Model.service:', err);
// 		throw new InternalServerErrorException(err);
// 	}
// }
