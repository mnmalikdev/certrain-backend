import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { AssetRegister } from '../entities/assetRegister.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
import path from 'path';
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
    assetRegister.riskAssessmentRequired = true;
    assetRegister.internalInspectionFrequency = dto.internalInspectionFrequency;
    assetRegister.statutoryInspection = dto.statutoryInspection;
    assetRegister.dateOfStatutoryInspection = dto.dateOfStatutoryInspection;

    // Handle file uploads
    if (files && files.forms) {
      const uploadedFiles = [];

      // Create the uploads directory if it doesn't exist
      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Process each uploaded file
      for (const file of files.forms) {
        const fileExtension = path.extname(file.originalname);
        const fileName = `${uuidv4()}${fileExtension}`;
        const filePath = path.join(uploadDir, fileName);

        // Save the file to the server
        fs.writeFileSync(filePath, file.buffer);

        // Add the file path or file name to the uploaded files array
        uploadedFiles.push(fileName); // Change this line to store the file path instead if desired
      }

      // Assign the uploaded files to the entity property
      assetRegister.internalInpectionForm = uploadedFiles.join(','); // Store the file paths or file names as a comma-separated string
    }

    // Save the asset register entry
    return await this.assetRegisterRepository.save(assetRegister);
  }
}
