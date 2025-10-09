import { Controller, Get, Param } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Get()
    findAll() {
      return this.assignmentsService.findAll();
    }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentsService.findOne(id);
  }

  @Get('course/:course_id')
  findCourseAssignments(@Param('course_id') course_id: string) {
    return this.assignmentsService.findCourseAssignments(course_id);
  }
}
