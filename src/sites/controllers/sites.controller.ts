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
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SiteService } from '../services/sites.service';
import { CreateSiteDTO } from '../DTOs/createSite.dto';
import { Site } from '../entities/site.entity';
import { UpdateSiteDTO } from '../DTOs/updateSite.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('Sites')
@Controller('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post('createSite')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Creates a new site',
    type: Site,
  })
  async createSite(
    @Req() req: Request,
    @Body() createSiteDTO: CreateSiteDTO,
  ): Promise<Site> {
    try {
      const newSite = await this.siteService.createSite(
        req.user['sub'],
        createSiteDTO,
      );
      return newSite;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Delete('deleteSite/:siteId')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Deletes a site',
  })
  async deleteSite(
    @Req() req: Request,
    @Param('siteId') siteId: string,
  ): Promise<void> {
    try {
      await this.siteService.deleteSite(req.user['sub'], siteId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('fetchSite/:siteId')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves a site by ID',
    type: Site,
  })
  async findSiteById(
    @Req() req: Request,
    @Param('siteId') siteId: string,
  ): Promise<Site> {
    try {
      const site = await this.siteService.findSiteById(req.user['sub'], siteId);
      return site;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/fetchAllSites')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves all sites',
    type: [Site],
  })
  async findAllSites(@Req() req: Request): Promise<Site[]> {
    const sites = await this.siteService.findAllSites(req.user['sub']);
    return sites;
  }

  @Patch('updateSite/:siteId')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'updates an existing siteId',
    type: Site,
  })
  async updateSite(
    @Req() req: Request,
    @Param('siteId') siteId: string,
    @Body() updateSiteDTO: UpdateSiteDTO,
  ): Promise<Site> {
    try {
      const newSite = await this.siteService.updateSite(
        req.user['sub'],
        siteId,
        updateSiteDTO,
      );
      return newSite;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
