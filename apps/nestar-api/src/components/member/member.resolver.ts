import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { MemberType } from '../../libs/enums/member.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { MemberUpdate } from '../../libs/dto/member/member.update';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { WithoutGuard } from '../auth/guards/without.guard';
import { Member, Members } from '../../libs/dto/member/member';
import { LoginInput, MemberInput, AgentsInquiry, MembersInquiry } from '../../libs/dto/member/member.input';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	// MUTATION => SIGNUP
	@Mutation(() => Member)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutation: signup');
		console.log('input:', input);
		return await this.memberService.signup(input);
	}

	// MUTATION => LOGIN
	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation: login');
		console.log('input:', input);
		return await this.memberService.login(input);
	}

	// AUTHENTICATED

	// QUERY => CHECK_AUTH
	@UseGuards(AuthGuard)
	@Query(() => String)
	public async checkAuth(@AuthMember('memberNick') memberNick: ObjectId): Promise<string> {
		console.log('Query: checkAuth');
		console.log('typeof memberNick: ', typeof memberNick);
		console.log('memberNick:', memberNick);
		return await `Hi ${memberNick}`;
	}

	// QUERY => CHECK_AUTH_ROLES

	@Roles(MemberType.USER, MemberType.AGENT)
	@UseGuards(RolesGuard)
	@Query(() => String)
	public async checkAuthRoles(@AuthMember() authMember: Member): Promise<string> {
		console.log('checkAuthRoles');
		console.log('typeof authMember: ', typeof authMember);
		console.log('authMember.memberType:', authMember.memberType);
		console.log('authMember:', authMember);
		return await `Hi, your memberType is ${authMember.memberType} and your memberNick is ${authMember.memberNick}, your memberId is ${authMember._id}`;
	}

	// MUTATION => UPDATE_MEMBER
	@UseGuards(AuthGuard)
	@Mutation(() => Member)
	public async updateMember(
		@Args('input') input: MemberUpdate,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Member> {
		console.log('Mutation: updateMember');
		console.log('typeof memberId: ', typeof memberId);
		console.log('memberId:', memberId);
		delete input._id;
		return await this.memberService.updateMember(memberId, input);
	}

	// QUERY => GET_MEMBER

	@UseGuards(WithoutGuard)
	@Query(() => Member)
	public async getMember(@Args('memberId') input: string, @AuthMember('_id') memberId: ObjectId): Promise<Member> {
		console.log('Query: getMember');
		console.log('typeof memberId: ', typeof memberId);
		console.log('memberId:', memberId);
		const targetId = shapeIntoMongoObjectId(input);
		return await this.memberService.getMember(memberId, targetId);
	}

	@UseGuards(WithoutGuard)
	@Query(() => Members)
	public async getAgents(@Args('input') input: AgentsInquiry, @AuthMember('_id') memberId: ObjectId): Promise<Members> {
		console.log('Query: getAgents');

		return await this.memberService.getAgents(memberId, input);
	}

	// ADMIN

	// AUTHORIZATION: ADMIN

	//MUTATION => GET_ALL_MEMBER_BY_ADMIN
	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Members)
	public async getAllMembersByAdmin(@Args('input') input: MembersInquiry): Promise<Members> {
		console.log('Query: getAllMembersByAdmin');

		return await this.memberService.getAllMembersByAdmin(input);
	}

	// AUTHORIZATION: ADMIN

	//MUTATION => UPDATE_MEMBER_BY_ADMIN
	@Mutation(() => Member)
	public async updateMemberByAdmin(@Args('input') input: MemberUpdate): Promise<Member> {
		console.log('Mutation: updateMemberByAdmin');
		return await this.memberService.updateMemberByAdmin(input);
	}
}
