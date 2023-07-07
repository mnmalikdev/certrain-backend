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
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ContractorService } from '../services/contractors.service';
import { Contractor } from '../entities/contractor.entity';
import { CreateContractorDTO } from '../DTOs/createContractor.dto';
import { UpdateContractorDTO } from '../DTOs/updateContractor.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('Contractors')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
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
    @Req() req: Request,
    @Body() createContractorDTO: CreateContractorDTO,
  ): Promise<Contractor> {
    try {
      const newContractor = await this.contractorService.createContractor(
        req.user['sub'],
        createContractorDTO,
      );
      return newContractor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get('fetchContractor/:contractorId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get a contractor by ID',
    type: Contractor,
  })
  async getContractorById(
    @Req() req: Request,
    @Param('contractorId') id: string,
  ): Promise<Contractor> {
    try {
      const contractor = await this.contractorService.getContractorById(
        req.user['sub'],
        id,
      );
      return contractor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  // Get all contractors
  @Get('/fetchAllContractors')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all contractors',
    type: Contractor,
    isArray: true,
  })
  async getAllContractors(@Req() req: Request): Promise<Contractor[]> {
    return this.contractorService.getAllContractors(req.user['sub']);
  }

  @Patch('updateContractor/:contractorId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update a contractor',
    type: Contractor,
  })
  async updateContractor(
    @Req() req: Request,

    @Param('contractorId') id: string,
    @Body() updateContractorDTO: UpdateContractorDTO,
  ): Promise<Contractor> {
    try {
      const updatedContractor = await this.contractorService.updateContractor(
        req.user['sub'],
        id,
        updateContractorDTO,
      );
      return updatedContractor;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete('deleteContractor/:contractorId')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete a contractor',
  })
  async deleteContractor(
    @Req() req: Request,
    @Param('contractorId') id: string,
  ): Promise<void> {
    try {
      await this.contractorService.deleteContractor(req.user['sub'], id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
