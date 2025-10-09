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

    async findCourseAssignments(course_id) {
        return this.prisma.assignment.findMany( {where: {assignment_course_id: course_id}})
    }
    
}
