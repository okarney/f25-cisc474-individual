import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { User, Prisma } from './../../../packages/database/generated/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
//   constructor(private prisma: PrismaService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

//   @Get()
//   findAll() {
//     return this.appService.findAll();
//   }
}