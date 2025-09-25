import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [LinksModule, UsersModule, CoursesModule, EnrollmentModule, AssignmentsModule, SubmissionsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}