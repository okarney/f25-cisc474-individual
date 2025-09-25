import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [LinksModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}