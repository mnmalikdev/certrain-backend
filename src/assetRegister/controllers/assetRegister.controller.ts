import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
  HttpCode,
  HttpStatus,
  UploadedFile,
  Req,
  Put,
  Param,
  Patch,
  Delete,
  NotFoundException,
  Get,
} from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiBody, ApiTags } from '@nestjs/swagger';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
import { AssetRegisterService } from '../services/assetRegister.service';
import { UpdateAssetRegisterDto } from '../DTOs/updateAssetRegister.dto';
import { AssetRegister } from '../entities/assetRegister.entity';

@Controller('asset-register')
@ApiTags('asset-register')
export class AssetRegisterController {
  constructor(private readonly assetRegisterService: AssetRegisterService) {}

  @ApiConsumes('multipart/form-data')
  @Post('/createAssetRegister')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to create asset  ' })
  @ApiBody({
    description: 'DTO for uploading skills',
    type: CreateAssetRegisterDto,
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'internalInspectionForm', maxCount: 1 },
      { name: 'documents', maxCount: 1 },
    ]),
  )
  async createAssetRegister(
    @UploadedFiles() files: any,
    @Body() payload: CreateAssetRegisterDto,
  ) {
    return await this.assetRegisterService.createAssetRegister(payload, files);
  }

  @Delete('deleteAsset/:assetId')
  @ApiOperation({ summary: 'Endpoint to delete asset  ' })
  @HttpCode(HttpStatus.OK)
  async deleteAssetRegister(@Param('assetId') assetId: string): Promise<void> {
    try {
      await this.assetRegisterService.deleteAssetRegister(assetId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Asset Register not found');
      }
      throw error;
    }
  }

  @ApiConsumes('multipart/form-data')
  @Patch('updateAssetRegister/:assetId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to update asset ' })
  @ApiBody({
    description: 'DTO for updating asset register',
    type: UpdateAssetRegisterDto,
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'internalInspectionForm', maxCount: 1 },
      { name: 'documents', maxCount: 1 },
    ]),
  )
  async updateAssetRegister(
    @Param('assetId') assetId: string,
    @UploadedFiles() files: any,
    @Body() dto: UpdateAssetRegisterDto,
  ) {
    return await this.assetRegisterService.updateAssetRegister(
      assetId,
      dto,
      files,
    );
  }

  @Get('fetchAsster/:assetId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to fetch asset ' })
  async fetchSingleAsset(
    @Param('assetId') assetId: string,
  ): Promise<AssetRegister> {
    const asset = await this.assetRegisterService.getAssetRegister(assetId);
    if (!asset) {
      throw new NotFoundException('Asset Register not found');
    }
    return asset;
  }

  @Get('fetchAllAssets')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to fetch all assets ' })
  async fetchAllAssets(): Promise<AssetRegister[]> {
    return this.assetRegisterService.getAllAssetRegisters();
  }
}
