import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseOut, CourseCreateIn, CourseUpdateIn } from '../../../../packages/api/src/courses'

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
    findAll() {
      return this.coursesService.findAll();
    }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }
}
