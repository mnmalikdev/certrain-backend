import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { AssetRegister } from '../entities/assetRegister.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
import * as path from 'path';
import { UpdateAssetRegisterDto } from '../DTOs/updateAssetRegister.dto';

// Import any required dependencies

@Injectable()
export class AssetRegisterService {
  constructor(
    @InjectRepository(AssetRegister)
    private readonly assetRegisterRepository: Repository<AssetRegister>,
  ) {}
  async createAssetRegister(
    dto: CreateAssetRegisterDto,
    files: any,
  ): Promise<AssetRegister> {
    const assetRegister = new AssetRegister();

    // Map the properties from the DTO to the entity
    assetRegister.assetId = uuidv4();
    assetRegister.assetNo = dto.assetNo;
    assetRegister.make = dto.make;
    assetRegister.model = dto.model;
    assetRegister.serialNumber = dto.serialNumber;
    assetRegister.yearOfManufacturer = dto.yearOfManufacturer;
    assetRegister.dateInstalled = dto.dateInstalled;
    assetRegister.dateCommissioned = dto.dateCommissioned;
    assetRegister.requiredTraining = dto.requiredTraining;
    assetRegister.riskAssessmentRequired = dto.requiredTraining;
    assetRegister.internalInspectionFrequency = dto.internalInspectionFrequency;
    assetRegister.statutoryInspection = dto.statutoryInspection;
    assetRegister.dateOfStatutoryInspection = dto.dateOfStatutoryInspection;

    assetRegister.riskAssessmentRequired = dto.riskAssessmentRequired;

    // Handle internal inspection form upload
    const internalInspectionFormFile = files.internalInspectionForm[0];
    if (internalInspectionFormFile) {
      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileExtension = path.extname(
        internalInspectionFormFile.originalname,
      );
      const fileName = `${uuidv4()}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, internalInspectionFormFile.buffer);

      assetRegister.internalInpectionForm = filePath;
    }

    // Handle documents upload
    const documentsFile = files.documents[0];
    if (documentsFile) {
      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileExtension = path.extname(documentsFile.originalname);
      const fileName = `${uuidv4()}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, documentsFile.buffer);

      assetRegister.documents = filePath;
    }

    // Save the asset register entry
    return await this.assetRegisterRepository.save(assetRegister);
  }

  async updateAssetRegister(
    assetId: string,
    dto: UpdateAssetRegisterDto,
    files: any,
  ): Promise<AssetRegister> {
    const assetRegister = await this.assetRegisterRepository.findOne({
      where: {
        assetId,
      },
    });

    if (!assetRegister) {
      throw new NotFoundException('Asset Register not found');
    }

    // Update the asset register properties if they are provided in the DTO
    if (dto.assetNo) {
      assetRegister.assetNo = dto.assetNo;
    }
    if (dto.make) {
      assetRegister.make = dto.make;
    }
    if (dto.model) {
      assetRegister.model = dto.model;
    }
    if (dto.serialNumber) {
      assetRegister.serialNumber = dto.serialNumber;
    }
    if (dto.yearOfManufacturer) {
      assetRegister.yearOfManufacturer = dto.yearOfManufacturer;
    }
    if (dto.dateInstalled) {
      assetRegister.dateInstalled = dto.dateInstalled;
    }
    if (dto.dateCommissioned) {
      assetRegister.dateCommissioned = dto.dateCommissioned;
    }
    if (dto.requiredTraining) {
      assetRegister.requiredTraining = dto.requiredTraining;
    }
    if (dto.internalInspectionFrequency) {
      assetRegister.internalInspectionFrequency =
        dto.internalInspectionFrequency;
    }
    if (dto.statutoryInspection) {
      assetRegister.statutoryInspection = dto.statutoryInspection;
    }
    if (dto.dateOfStatutoryInspection) {
      assetRegister.dateOfStatutoryInspection = dto.dateOfStatutoryInspection;
    }

    // Handle internal inspection form upload
    const internalInspectionFormFile = files?.internalInspectionForm?.[0];
    if (internalInspectionFormFile) {
      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileExtension = path.extname(
        internalInspectionFormFile.originalname,
      );
      const fileName = `${uuidv4()}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, internalInspectionFormFile.buffer);

      assetRegister.internalInpectionForm = filePath;
    }

    // Handle documents upload
    const documentsFile = files?.documents?.[0];
    if (documentsFile) {
      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileExtension = path.extname(documentsFile.originalname);
      const fileName = `${uuidv4()}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, documentsFile.buffer);

      assetRegister.documents = filePath;
    }

    // Save the updated asset register entry
    return await this.assetRegisterRepository.save(assetRegister);
  }

  async deleteAssetRegister(assetId: string): Promise<void> {
    const assetRegister = await this.assetRegisterRepository.findOne({
      where: {
        assetId,
      },
    });

    if (!assetRegister) {
      throw new NotFoundException('Asset Register not found');
    }

    // Delete the associated files
    if (assetRegister.internalInpectionForm) {
      fs.unlinkSync(assetRegister.internalInpectionForm);
    }
    if (assetRegister.documents) {
      fs.unlinkSync(assetRegister.documents);
    }

    // Delete the asset register entry
    await this.assetRegisterRepository.remove(assetRegister);
  }

  async getAssetRegister(assetId: string): Promise<AssetRegister> {
    const asset = await this.assetRegisterRepository.findOne({
      where: {
        assetId,
      },
    });
    if (!asset) {
      throw new NotFoundException('Asset Register not found');
    }
    return asset;
  }

  async getAllAssetRegisters(): Promise<AssetRegister[]> {
    return this.assetRegisterRepository.find();
  }
}
