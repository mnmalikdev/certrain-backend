import { Repository } from 'typeorm';
import { RiskAssessment } from '../entities/riskAssesment.entity';
import { CreateRiskAssessmentDTO } from '../DTOs/createRiskAssesment.dto';
import { UpdateRiskAssessmentDTO } from '../DTOs/updateRiskAssessment.dto';
export declare class RiskAssessmentService {
    private readonly riskAssessmentRepository;
    constructor(riskAssessmentRepository: Repository<RiskAssessment>);
    createRiskAssessment(userId: string, createRiskAssessmentDTO: CreateRiskAssessmentDTO): Promise<RiskAssessment>;
    getRiskAssessmentById(userId: string, riskAssessmentId: string): Promise<RiskAssessment>;
    getAllRiskAssessments(userId: string): Promise<RiskAssessment[]>;
    updateRiskAssessment(userId: string, riskAssessmentId: string, updateRiskAssessmentDTO: UpdateRiskAssessmentDTO): Promise<RiskAssessment>;
    deleteRiskAssessment(userId: string, riskAssessmentId: string): Promise<void>;
}
