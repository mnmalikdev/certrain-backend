import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiskAssessment } from './entities/riskAssesment.entity';
import { RiskAssessmentService } from './services/riskAssessment.service';
import { RiskAssessmentController } from './controllers/riskAssesment.controller';
@Module({
  imports: [TypeOrmModule.forFeature([RiskAssessment])],
  providers: [RiskAssessmentService],
  controllers: [RiskAssessmentController],
})
export class RiskAssessmentModule {}
