import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UseGuards } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutation: signup');
		console.log('input:', input);
		return await this.memberService.signup(input);
	}
	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation: login');
		console.log('input:', input);
		return await this.memberService.login(input);
	}

	// AUTHENTICATED

	@UseGuards(AuthGuard)
	@Mutation(() => String)
	public async updateMember(@AuthMember('_id') memberId: ObjectId): Promise<string> {
		console.log('Mutation: updateMember');
		console.log('typeof memberId: ', typeof memberId);
		console.log('memberId:', memberId);
		return await this.memberService.updateMember();
	}

	@UseGuards(AuthGuard)
	@Query(() => String)
	public async checkAuth(@AuthMember('memberNick') memberNick: ObjectId): Promise<string> {
		console.log('Query: checkAuth');
		console.log('typeof memberNick: ', typeof memberNick);
		console.log('memberNick:', memberNick);
		return await `Hi ${memberNick}`;
	}

	@Query(() => Member)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return await this.memberService.getMember();
	}

	// ADMIN

	// AUTHORIZATION: ADMIN

	@Mutation(() => String)
	public async getAllMembersByAdmin(): Promise<string> {
		console.log('getAllMembersByAdmin');
		return await this.memberService.getAllMembersByAdmin();
	}

	// AUTHORIZATION: ADMIN

	@Mutation(() => String)
	public async updateMemberByAdmin(): Promise<string> {
		console.log('Updating member by admin');
		return await this.memberService.updateMemberByAdmin();
	}
}
