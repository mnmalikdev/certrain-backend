import { ContractorService } from '../services/contractors.service';
import { Contractor } from '../entities/contractor.entity';
import { CreateContractorDTO } from '../DTOs/createContractor.dto';
import { UpdateContractorDTO } from '../DTOs/updateContractor.dto';
import { Request } from 'express';
export declare class ContractorsController {
    private readonly contractorService;
    constructor(contractorService: ContractorService);
    createContractor(req: Request, createContractorDTO: CreateContractorDTO): Promise<Contractor>;
    getContractorById(req: Request, id: string): Promise<Contractor>;
    getAllContractors(req: Request): Promise<Contractor[]>;
    updateContractor(req: Request, id: string, updateContractorDTO: UpdateContractorDTO): Promise<Contractor>;
    deleteContractor(req: Request, id: string): Promise<void>;
}
