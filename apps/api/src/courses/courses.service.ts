import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CourseCreateIn, CourseOut } from '@repo/api/courses';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.course.findMany();
    }

    async findOne(id) {
        return this.prisma.course.findUnique( {where: {course_id: id}} );
    }

    async create(createCourseDto: CourseCreateIn): Promise<CourseOut> {
        const newCourse = await this.prisma.course.create({
            data: createCourseDto,
        });
        return {
            course_id: newCourse.course_id,
            course_title: newCourse.course_title,
            course_number: newCourse.course_number,
            course_description: newCourse.course_description,
        };
  }

}
