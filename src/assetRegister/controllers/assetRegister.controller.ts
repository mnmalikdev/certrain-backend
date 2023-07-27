import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
  HttpCode,
  HttpStatus,
  Req,
  Param,
  Patch,
  Delete,
  NotFoundException,
  Get,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiBody,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
import { AssetRegisterService } from '../services/assetRegister.service';
import { UpdateAssetRegisterDto } from '../DTOs/updateAssetRegister.dto';
import { AssetRegister } from '../entities/assetRegister.entity';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('asset-register')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
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
    @Req() req: Request,
    @UploadedFiles() files: any,
    @Body() payload: CreateAssetRegisterDto,
  ) {
    return await this.assetRegisterService.createAssetRegister(
      req.user['sub'],
      payload,
      files,
    );
  }

  @Delete('deleteAsset/:assetId')
  @ApiOperation({ summary: 'Endpoint to delete asset  ' })
  @HttpCode(HttpStatus.OK)
  async deleteAssetRegister(
    @Req() req: Request,
    @Param('assetId') assetId: string,
  ): Promise<void> {
    try {
      await this.assetRegisterService.deleteAssetRegister(
        req.user['sub'],
        assetId,
      );
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
    @Req() req: Request,
    @Param('assetId') assetId: string,
    @UploadedFiles() files: any,
    @Body() dto: UpdateAssetRegisterDto,
  ) {
    return await this.assetRegisterService.updateAssetRegister(
      req.user['sub'],
      assetId,
      dto,
      files,
    );
  }

  @Get('fetchAsset/:assetId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to fetch asset ' })
  async fetchSingleAsset(
    @Req() req: Request,
    @Param('assetId') assetId: string,
  ): Promise<AssetRegister> {
    const asset = await this.assetRegisterService.getAssetRegister(
      req.user['sub'],
      assetId,
    );
    if (!asset) {
      throw new NotFoundException('Asset Register not found');
    }
    return asset;
  }

  @Get('fetchAllAssets')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to fetch all assets ' })
  async fetchAllAssets(@Req() req: Request): Promise<AssetRegister[]> {
    return this.assetRegisterService.getAllAssetRegisters(req.user['sub']);
  }
}
