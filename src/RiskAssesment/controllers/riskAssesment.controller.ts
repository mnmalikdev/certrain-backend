import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { RiskAssessmentService } from '../services/riskAssessment.service';
import { RiskAssessment } from '../entities/riskAssesment.entity';
import { CreateRiskAssessmentDTO } from '../DTOs/createRiskAssesment.dto';
import { UpdateRiskAssessmentDTO } from '../DTOs/updateRiskAssessment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('risk-assessments')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('risk-assessments')
export class RiskAssessmentController {
  constructor(private readonly riskAssessmentService: RiskAssessmentService) {}

  @Post('createRiskAssessment')
  async create(
    @Req() req: Request,
    @Body() createRiskAssessmentDTO: CreateRiskAssessmentDTO,
  ): Promise<RiskAssessment> {
    return this.riskAssessmentService.createRiskAssessment(
      req.user['sub'],
      createRiskAssessmentDTO,
    );
  }

  @Get('fetchRiskAssessment/:riskAssessmentId')
  async findOne(
    @Req() req: Request,
    @Param('riskAssessmentId') id: string,
  ): Promise<RiskAssessment> {
    return this.riskAssessmentService.getRiskAssessmentById(
      req.user['sub'],
      id,
    );
  }

  @Get('fetchAllRiskAssessments')
  async findAll(@Req() req: Request): Promise<RiskAssessment[]> {
    return this.riskAssessmentService.getAllRiskAssessments(req.user['sub']);
  }

  @Patch('updateRiskAssessment/:riskAssessmentId')
  async update(
    @Req() req: Request,
    @Param('riskAssessmentId') id: string,
    @Body() updateRiskAssessmentDTO: UpdateRiskAssessmentDTO,
  ): Promise<RiskAssessment> {
    return this.riskAssessmentService.updateRiskAssessment(
      req.user['sub'],
      id,
      updateRiskAssessmentDTO,
    );
  }

  @Delete('deleteRiskAssessment/:riskAssessmentId')
  async remove(
    @Req() req: Request,
    @Param('riskAssessmentId') id: string,
  ): Promise<void> {
    return this.riskAssessmentService.deleteRiskAssessment(req.user['sub'], id);
  }
}
