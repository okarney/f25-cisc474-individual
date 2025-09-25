import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Course, Prisma } from '../../../../packages/database/generated/client';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}

    async user(
        courseWhereUniqueInput: Prisma.CourseWhereUniqueInput,
    ): Promise<Course | null> {
        return this.prisma.course.findUnique({
        where: courseWhereUniqueInput,
        });
    }

    async findAll() {
        return this.prisma.course.findMany();
    }

    async findOne(id) {
        return this.prisma.course.findUnique( {where: {course_id: id}} );
    }

}
