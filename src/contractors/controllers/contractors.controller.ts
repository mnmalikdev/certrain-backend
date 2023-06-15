import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Patch,
  Param,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ContractorService } from '../services/contractors.service';
import { Contractor } from '../entities/contractor.entity';
import { CreateContractorDTO } from '../DTOs/createContractor.dto';
import { UpdateContractorDTO } from '../DTOs/updateContractor.dto';

@ApiTags('Contractors')
@Controller('contractors')
export class ContractorsController {
  constructor(private readonly contractorService: ContractorService) {}

  @Post('createContractor')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Creates a new contractor',
    type: Contractor,
  })
  async createContractor(
    @Body() createContractorDTO: CreateContractorDTO,
  ): Promise<Contractor> {
    try {
      const newContractor = await this.contractorService.createContractor(
        createContractorDTO,
      );
      return newContractor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get a contractor by ID',
    type: Contractor,
  })
  async getContractorById(@Param('id') id: string): Promise<Contractor> {
    try {
      const contractor = await this.contractorService.getContractorById(id);
      return contractor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  // Get all contractors
  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all contractors',
    type: Contractor,
    isArray: true,
  })
  async getAllContractors(): Promise<Contractor[]> {
    return this.contractorService.getAllContractors();
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update a contractor',
    type: Contractor,
  })
  async updateContractor(
    @Param('id') id: string,
    @Body() updateContractorDTO: UpdateContractorDTO,
  ): Promise<Contractor> {
    try {
      const updatedContractor = await this.contractorService.updateContractor(
        id,
        updateContractorDTO,
      );
      return updatedContractor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete a contractor',
  })
  async deleteContractor(@Param('id') id: string): Promise<void> {
    try {
      await this.contractorService.deleteContractor(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
