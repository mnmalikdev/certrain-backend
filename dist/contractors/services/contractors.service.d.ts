import { Repository } from 'typeorm';
import { Contractor } from '../entities/contractor.entity';
import { CreateContractorDTO } from '../DTOs/createContractor.dto';
import { UpdateContractorDTO } from '../DTOs/updateContractor.dto';
export declare class ContractorService {
    private readonly contractorRepository;
    constructor(contractorRepository: Repository<Contractor>);
    createContractor(userId: string, createContractorDTO: CreateContractorDTO): Promise<Contractor>;
    getContractorById(userId: string, contractorId: string): Promise<Contractor>;
    getAllContractors(userId: string): Promise<Contractor[]>;
    updateContractor(userId: string, contractorId: string, updateContractorDTO: UpdateContractorDTO): Promise<Contractor>;
    deleteContractor(userId: string, contractorId: string): Promise<void>;
}
