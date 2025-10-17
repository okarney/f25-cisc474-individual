import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseCreateIn } from './../../../../packages/api/src/courses'

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

  @Post()
  create(@Body() createCourseDto: CourseCreateIn) {
    return this.coursesService.create(createCourseDto);
  }
}
