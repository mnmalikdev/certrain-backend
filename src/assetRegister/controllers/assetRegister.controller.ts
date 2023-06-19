import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  HttpCode,
  UploadedFiles,
  Req,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { AssetRegisterService } from '../services/assetRegister.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
// Import any required dependencies

@Controller('asset-register')
@ApiTags('asset-register')
export class AssetRegisterController {
  constructor(private readonly assetRegisterService: AssetRegisterService) {}
  // Implement your controller methods here

  @ApiConsumes('multipart/form-data')
  @Post('/uploadForm')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'internalInpectionForm', maxCount: 3 }]),
  )
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Endpoint to update user info' })
  @ApiBody({
    description: 'DTO for uploading skills',
    type: CreateAssetRegisterDto,
  })
  async updateProfile(
    @Body() updateProfileDto: CreateAssetRegisterDto,
    @UploadedFiles()
    files: {
      internalInpectionForm?: any[];
    },
  ) {
    return await this.assetRegisterService.createAssetRegister(
      updateProfileDto,
      files,
    );
  }
}
