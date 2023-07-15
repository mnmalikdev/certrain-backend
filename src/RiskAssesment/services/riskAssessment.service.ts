import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RiskAssessment } from '../entities/riskAssesment.entity';
import { CreateRiskAssessmentDTO } from '../DTOs/createRiskAssesment.dto';
import { UpdateRiskAssessmentDTO } from '../DTOs/updateRiskAssessment.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RiskAssessmentService {
  constructor(
    @InjectRepository(RiskAssessment)
    private readonly riskAssessmentRepository: Repository<RiskAssessment>,
  ) {}

  async createRiskAssessment(
    userId: string,
    createRiskAssessmentDTO: CreateRiskAssessmentDTO,
  ): Promise<RiskAssessment> {
    const newRiskAssessment = new RiskAssessment();
    newRiskAssessment.riskAssessmentId = uuidv4();
    console.log(createRiskAssessmentDTO.riskRating);
    // newRiskAssessment.refNo = createRiskAssessmentDTO.refNo;
    // newRiskAssessment.area = createRiskAssessmentDTO.area;
    // newRiskAssessment.description = createRiskAssessmentDTO.description;
    // newRiskAssessment.assessmentDate = createRiskAssessmentDTO.assessmentDate;
    // newRiskAssessment.reviewDate = createRiskAssessmentDTO.reviewDate;
    // newRiskAssessment.status = createRiskAssessmentDTO.status;
    // newRiskAssessment.riskAssessmentOwner =
    //   createRiskAssessmentDTO.riskAssessmentOwner;
    newRiskAssessment.residualRiskRating =
      createRiskAssessmentDTO.residualRiskRating;
    newRiskAssessment.residualRiskRatingX =
      createRiskAssessmentDTO.residualRiskRatingX;
    newRiskAssessment.residualRiskRatingY =
      createRiskAssessmentDTO.residualRiskRatingY;
    newRiskAssessment.riskRating = createRiskAssessmentDTO.riskRating;
    newRiskAssessment.riskRatingX = createRiskAssessmentDTO.riskRatingX;
    newRiskAssessment.riskRatingY = createRiskAssessmentDTO.riskRatingY; // Assign the object directly
    newRiskAssessment.hazard = createRiskAssessmentDTO.hazard;
    newRiskAssessment.risk = createRiskAssessmentDTO.risk;
    newRiskAssessment.peopleAtRisk = createRiskAssessmentDTO.peopleAtRisk;
    newRiskAssessment.controls = createRiskAssessmentDTO.controls;
    newRiskAssessment.riskAssessmentCreatedBy = <any>{ userId: userId };

    await this.riskAssessmentRepository.save(newRiskAssessment);
    return newRiskAssessment;
  }

  async getRiskAssessmentById(
    userId: string,
    riskAssessmentId: string,
  ): Promise<RiskAssessment> {
    const riskAssessment = await this.riskAssessmentRepository.findOne({
      where: {
        riskAssessmentCreatedBy: <any>{ userId: userId },
        riskAssessmentId: riskAssessmentId,
      },
    });
    if (!riskAssessment) {
      throw new NotFoundException('Risk Assessment not found');
    }
    return riskAssessment;
  }

  async getAllRiskAssessments(userId: string): Promise<RiskAssessment[]> {
    return this.riskAssessmentRepository.find({
      where: {
        riskAssessmentCreatedBy: <any>{ userId: userId },
      },
    });
  }

  async updateRiskAssessment(
    userId: string,
    riskAssessmentId: string,
    updateRiskAssessmentDTO: UpdateRiskAssessmentDTO,
  ): Promise<RiskAssessment> {
    const riskAssessment = await this.riskAssessmentRepository.findOne({
      where: {
        riskAssessmentCreatedBy: <any>{ userId: userId },
        riskAssessmentId: riskAssessmentId,
      },
    });
    if (!riskAssessment) {
      throw new NotFoundException('Risk Assessment not found');
    }

    // Update the fields of the risk assessment if provided in the DTO
    // if (updateRiskAssessmentDTO.refNo) {
    //   riskAssessment.refNo = updateRiskAssessmentDTO.refNo;
    // }
    // if (updateRiskAssessmentDTO.area) {
    //   riskAssessment.area = updateRiskAssessmentDTO.area;
    // }
    // if (updateRiskAssessmentDTO.description) {
    //   riskAssessment.description = updateRiskAssessmentDTO.description;
    // }
    // if (updateRiskAssessmentDTO.assessmentDate) {
    //   riskAssessment.assessmentDate = updateRiskAssessmentDTO.assessmentDate;
    // }
    // if (updateRiskAssessmentDTO.reviewDate) {
    //   riskAssessment.reviewDate = updateRiskAssessmentDTO.reviewDate;
    // }
    // if (updateRiskAssessmentDTO.status) {
    //   riskAssessment.status = updateRiskAssessmentDTO.status;
    // }
    // if (updateRiskAssessmentDTO.riskAssessmentOwner) {
    //   riskAssessment.riskAssessmentOwner =
    //     updateRiskAssessmentDTO.riskAssessmentOwner;
    // }
    if (updateRiskAssessmentDTO.residualRiskRating) {
      riskAssessment.residualRiskRating =
        updateRiskAssessmentDTO.residualRiskRating;
    }
    if (updateRiskAssessmentDTO.residualRiskRatingX) {
      riskAssessment.residualRiskRatingX =
        updateRiskAssessmentDTO.residualRiskRatingX;
    }
    if (updateRiskAssessmentDTO.residualRiskRatingY) {
      riskAssessment.residualRiskRatingY =
        updateRiskAssessmentDTO.residualRiskRatingY;
    }
    if (updateRiskAssessmentDTO.riskRating) {
      riskAssessment.riskRating = updateRiskAssessmentDTO.riskRating;
    }
    if (updateRiskAssessmentDTO.riskRatingX) {
      riskAssessment.riskRatingX = updateRiskAssessmentDTO.riskRatingX;
    }
    if (updateRiskAssessmentDTO.riskRatingY) {
      riskAssessment.riskRatingY = updateRiskAssessmentDTO.riskRatingY;
    }
    if (updateRiskAssessmentDTO.risk) {
      riskAssessment.risk = updateRiskAssessmentDTO.risk;
    }

    if (updateRiskAssessmentDTO.hazard) {
      riskAssessment.hazard = updateRiskAssessmentDTO.hazard;
    }
    if (updateRiskAssessmentDTO.peopleAtRisk) {
      riskAssessment.peopleAtRisk = updateRiskAssessmentDTO.peopleAtRisk;
    }
    if (updateRiskAssessmentDTO.controls) {
      riskAssessment.controls = updateRiskAssessmentDTO.controls;
    }

    await this.riskAssessmentRepository.save(riskAssessment);
    return riskAssessment;
  }

  async deleteRiskAssessment(
    userId: string,
    riskAssessmentId: string,
  ): Promise<void> {
    const riskAssessment = await this.riskAssessmentRepository.findOne({
      where: {
        riskAssessmentCreatedBy: <any>{ userId: userId },
        riskAssessmentId: riskAssessmentId,
      },
    });
    if (!riskAssessment) {
      throw new NotFoundException('Risk Assessment not found');
    }
    await this.riskAssessmentRepository.remove(riskAssessment);
  }
}
