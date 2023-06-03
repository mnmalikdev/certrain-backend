import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { SiteService } from './services/sites.service';
import { SiteController } from './controllers/sites.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  providers: [SiteService],
  controllers: [SiteController],
})
export class SitesModule {}
