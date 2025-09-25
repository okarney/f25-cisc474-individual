import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [LinksModule, UsersModule],
})
export class AppModule {}
