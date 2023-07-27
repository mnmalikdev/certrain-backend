import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contractor } from '../entities/contractor.entity';
import { CreateContractorDTO } from '../DTOs/createContractor.dto';
import { UpdateContractorDTO } from '../DTOs/updateContractor.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ContractorService {
  constructor(
    @InjectRepository(Contractor)
    private readonly contractorRepository: Repository<Contractor>,
  ) {}

  async createContractor(
    userId: string,
    createContractorDTO: CreateContractorDTO,
  ): Promise<Contractor> {
    const newContractor = new Contractor();
    newContractor.contractorId = uuidv4();
    newContractor.name = createContractorDTO.name;
    newContractor.description = createContractorDTO.description;
    newContractor.personInCharge = createContractorDTO.personInCharge;
    newContractor.roleOfContractor = <any>{
      roleId: createContractorDTO.roleId,
    };
    newContractor.personInChargeEmail = createContractorDTO.personInChargeEmail;
    newContractor.personInChargePhone = createContractorDTO.personInChargePhone;
    newContractor.address = createContractorDTO.address;
    newContractor.VAT = createContractorDTO.VAT;
    newContractor.docsRequiredWithin = createContractorDTO.docsRequiredWithin;
    newContractor.requestedDocumentation =
      createContractorDTO.requestedDocumentation;
    newContractor.site = <any>{ siteId: createContractorDTO.siteId };
    newContractor.contractorCreatedBy = <any>{ userId: userId };

    await this.contractorRepository.save(newContractor);
    return newContractor;
  }

  async getContractorById(
    userId: string,
    contractorId: string,
  ): Promise<Contractor> {
    const contractor = await this.contractorRepository.findOne({
      where: {
        contractorCreatedBy: <any>{ userId: userId },
        contractorId,
      },
      relations: ['site', 'roleOfContractor'],
    });
    if (!contractor) {
      throw new NotFoundException('Contractor not found');
    }
    return contractor;
  }

  async getAllContractors(userId: string): Promise<Contractor[]> {
    return this.contractorRepository.find({
      where: {
        contractorCreatedBy: <any>{ userId: userId },
      },
      relations: ['site', 'roleOfContractor'],
    });
  }

  async updateContractor(
    userId: string,
    contractorId: string,
    updateContractorDTO: UpdateContractorDTO,
  ): Promise<Contractor> {
    const contractor = await this.contractorRepository.findOne({
      where: {
        contractorCreatedBy: <any>{ userId: userId },
        contractorId,
      },
    });
    if (!contractor) {
      throw new NotFoundException('Contractor not found');
    }

    // Update the fields of the contractor if provided in the DTO
    if (updateContractorDTO.name) {
      contractor.name = updateContractorDTO.name;
    }
    if (updateContractorDTO.description) {
      contractor.description = updateContractorDTO.description;
    }
    if (updateContractorDTO.personInCharge) {
      contractor.personInCharge = updateContractorDTO.personInCharge;
    }
    if (updateContractorDTO.roleId) {
      contractor.roleOfContractor = <any>{
        roleId: updateContractorDTO.roleId,
      };
    }
    if (updateContractorDTO.personInChargeEmail) {
      contractor.personInChargeEmail = updateContractorDTO.personInChargeEmail;
    }
    if (updateContractorDTO.personInChargePhone) {
      contractor.personInChargePhone = updateContractorDTO.personInChargePhone;
    }
    if (updateContractorDTO.address) {
      contractor.address = updateContractorDTO.address;
    }
    if (updateContractorDTO.VAT) {
      contractor.VAT = updateContractorDTO.VAT;
    }
    if (updateContractorDTO.docsRequiredWithin) {
      contractor.docsRequiredWithin = updateContractorDTO.docsRequiredWithin;
    }
    if (updateContractorDTO.requestedDocumentation) {
      contractor.requestedDocumentation =
        updateContractorDTO.requestedDocumentation;
    }

    await this.contractorRepository.save(contractor);
    return contractor;
  }

  async deleteContractor(userId: string, contractorId: string): Promise<void> {
    const contractor = await this.contractorRepository.findOne({
      where: {
        contractorCreatedBy: <any>{ userId: userId },
        contractorId,
      },
    });
    if (!contractor) {
      throw new NotFoundException('Contractor not found');
    }
    await this.contractorRepository.remove(contractor);
  }
}
