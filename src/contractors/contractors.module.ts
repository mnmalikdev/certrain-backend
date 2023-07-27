import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contractor } from './entities/contractor.entity';
import { ContractorService } from './services/contractors.service';
import { ContractorsController } from './controllers/contractors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contractor])],
  providers: [ContractorService],
  controllers: [ContractorsController],
})
export class ContractorModule {}
