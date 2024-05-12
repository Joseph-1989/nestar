import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		try {
			console.log('Mutation: signup');
			console.log('input:', input);
			return await this.memberService.signup(input);
		} catch (err) {
			console.log('ERR: signup', err);
			throw new InternalServerErrorException(err);
		}
	}
	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		try {
			console.log('Mutation: login');
			console.log('input:', input);
			return await this.memberService.login(input);
		} catch (err) {
			console.log('ERR: login', err);
			throw new InternalServerErrorException(err);
		}
	}
	// @Mutation(() => Member)
	// public async updateMember(): Promise<Member> {
	// 	try {
	// 		console.log('Mutation: updateMember');
	// 		// console.log('input:', input);
	// 		return await this.memberService.updateMember();
	// 	} catch (err) {
	// 		console.log('ERR: updateMember', err);
	// 		throw new InternalServerErrorException(err);
	// 	}
	// }

	// @Query(() => Member)
	// public async getMember(): Promise<Member> {
	// 	try {
	// 		console.log('Query: getMember');
	// 		return await this.memberService.getMember(input);
	// 	} catch (err) {
	// 		console.log('ERR: getMember', err);
	// 		throw new InternalServerErrorException(err);
	// 	}
	// }
}
