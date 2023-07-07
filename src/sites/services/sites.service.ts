import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from '../entities/site.entity';
import { CreateSiteDTO } from '../DTOs/createSite.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateSiteDTO } from '../DTOs/updateSite.dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}

  async createSite(userId: string, createSiteDTO: CreateSiteDTO) {
    const site = await this.siteRepository.findOne({
      where: {
        address: createSiteDTO?.address,
        siteCreatedBy: <any>{ userId: userId },
      },
    });
    if (site) {
      throw new ForbiddenException('A site with this address already exists');
    }
    const newSite = new Site();
    newSite.siteId = uuidv4();
    newSite.name = createSiteDTO.name;
    newSite.address = createSiteDTO.address;
    newSite.siteCreatedBy = <any>{ userId: userId };
    await this.siteRepository.save(newSite);
    return newSite;
  }

  async findSiteById(userId: string, siteId: string): Promise<Site> {
    const site = await this.siteRepository.findOne({
      where: {
        siteId,
        siteCreatedBy: <any>{ userId: userId },
      },
      relations: ['departmentOfSite'],
    });
    if (!site) {
      throw new NotFoundException('Site not found');
    }
    return site;
  }

  async findAllSites(userId: string): Promise<Site[]> {
    return this.siteRepository.find({
      where: {
        siteCreatedBy: <any>{ userId: userId },
      },
      relations: ['departmentOfSite'],
    });
  }

  async deleteSite(userId: string, siteId: string): Promise<void> {
    const site = await this.siteRepository.findOne({
      where: {
        siteCreatedBy: <any>{ userId: userId },
        siteId,
      },
    });
    if (!site) {
      throw new NotFoundException('Site not found');
    }
    await this.siteRepository.delete({
      siteId: siteId,
    });
  }

  async updateSite(
    userId: string,
    siteId: string,
    updateSiteDTO: UpdateSiteDTO,
  ): Promise<Site> {
    const site = await this.findSiteById(userId, siteId);

    if (updateSiteDTO.name) {
      site.name = updateSiteDTO.name;
    }

    if (updateSiteDTO.address) {
      site.address = updateSiteDTO.address;
    }

    await this.siteRepository.save(site);

    return site;
  }
}
