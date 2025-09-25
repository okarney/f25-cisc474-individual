import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.course.findMany();
    }

    async findOne(id) {
        return this.prisma.course.findUnique( {where: {course_id: id}} );
    }

}
