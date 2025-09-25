import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AssignmentsService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.assignment.findMany();
    }

    async findOne(id) {
        return this.prisma.assignment.findUnique( {where: {assignment_id: id}} );
    }
    
}
