import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Member } from '../../libs/dto/view/view';
import { shapeIntoMongoObjectId } from '../../libs/config';
@Injectable()
export class AuthService {
	constructor(private JwtService: JwtService) {}
	public async hashPassword(memberPassword: string): Promise<string> {
		const salt = await bcrypt.genSalt();
		return await bcrypt.hash(memberPassword, salt);
	}

	public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
		return await bcrypt.compare(password, hashedPassword);
	}

	public async createToken(member: Member): Promise<string> {
		const payload: T = {};
		Object.keys(member['_doc'] ? member['_doc'] : member).map((ele) => {
			payload[`${ele}`] = member[`${ele}`];
		});

		delete payload.memberPassword;
		return await this.JwtService.signAsync(payload);
	}

	public async verifyToken(token: string): Promise<T> {
		const member = await this.JwtService.verifyAsync(token);
		member._id = shapeIntoMongoObjectId(member._id);
		return member;
	}
}
