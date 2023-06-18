import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Patch,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { SiteService } from '../services/sites.service';
import { CreateSiteDTO } from '../DTOs/createSite.dto';
import { Site } from '../entities/site.entity';
import { UpdateSiteDTO } from '../DTOs/updateSite.dto';

@ApiTags('Sites')
@Controller('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post('createSite')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Creates a new site',
    type: Site,
  })
  async createSite(@Body() createSiteDTO: CreateSiteDTO): Promise<Site> {
    try {
      const newSite = await this.siteService.createSite(createSiteDTO);
      return newSite;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Delete('deleteSite/:siteId')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Deletes a site',
  })
  async deleteSite(@Param('siteId') siteId: string): Promise<void> {
    try {
      await this.siteService.deleteSite(siteId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('fetchSite/:siteId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves a site by ID',
    type: Site,
  })
  async findSiteById(@Param('siteId') siteId: string): Promise<Site> {
    try {
      const site = await this.siteService.findSiteById(siteId);
      return site;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/fetchAllSites')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves all sites',
    type: [Site],
  })
  async findAllSites(): Promise<Site[]> {
    const sites = await this.siteService.findAllSites();
    return sites;
  }

  @Patch('updateSite/:siteId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'updates an existing siteId',
    type: Site,
  })
  async updateSite(
    @Param('siteId') siteId: string,
    @Body() updateSiteDTO: UpdateSiteDTO,
  ): Promise<Site> {
    try {
      const newSite = await this.siteService.updateSite(siteId, updateSiteDTO);
      return newSite;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
