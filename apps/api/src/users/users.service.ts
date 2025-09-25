
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '../../../../packages/database/generated/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id) {
    return this.prisma.user.findUnique( {where: {user_id: id}} );
  }

 
}