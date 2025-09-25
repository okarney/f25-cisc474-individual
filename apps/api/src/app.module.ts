import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [LinksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}