import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SubmissionsService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.submission.findMany();
    }

    async findOne(id) {
        return this.prisma.submission.findUnique( {where: {submission_id: id}} );
    }
}
