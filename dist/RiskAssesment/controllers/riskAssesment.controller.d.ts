import { RiskAssessmentService } from '../services/riskAssessment.service';
import { RiskAssessment } from '../entities/riskAssesment.entity';
import { CreateRiskAssessmentDTO } from '../DTOs/createRiskAssesment.dto';
import { UpdateRiskAssessmentDTO } from '../DTOs/updateRiskAssessment.dto';
import { Request } from 'express';
export declare class RiskAssessmentController {
    private readonly riskAssessmentService;
    constructor(riskAssessmentService: RiskAssessmentService);
    create(req: Request, createRiskAssessmentDTO: CreateRiskAssessmentDTO): Promise<RiskAssessment>;
    findOne(req: Request, id: string): Promise<RiskAssessment>;
    findAll(req: Request): Promise<RiskAssessment[]>;
    update(req: Request, id: string, updateRiskAssessmentDTO: UpdateRiskAssessmentDTO): Promise<RiskAssessment>;
    remove(req: Request, id: string): Promise<void>;
}
