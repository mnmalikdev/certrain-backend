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

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}

  async createSite(createSiteDTO: CreateSiteDTO) {
    const site = await this.siteRepository.findOne({
      where: {
        name: createSiteDTO?.name,
      },
    });
    if (site) {
      throw new ForbiddenException('A site with this name already exists');
    }
    const newSite = new Site();
    newSite.siteId = uuidv4();
    newSite.name = createSiteDTO.name;
    newSite.address = createSiteDTO.address;

    await this.siteRepository.save(newSite);
    return newSite;
  }

  async findSiteById(siteId: string): Promise<Site> {
    const site = await this.siteRepository.findOne({
      where: {
        siteId,
      },
      relations: ['departmentOfSite'],
    });
    if (!site) {
      throw new NotFoundException('Site not found');
    }
    return site;
  }

  async findAllSites(): Promise<Site[]> {
    return this.siteRepository.find({
      relations: ['departmentOfSite'],
    });
  }

  async deleteSite(siteId: string): Promise<void> {
    const site = await this.siteRepository.findOne({
      where: {
        siteId,
      },
    });
    if (!site) {
      throw new NotFoundException('Site not found');
    }
    await this.siteRepository.remove(site);
  }
}
