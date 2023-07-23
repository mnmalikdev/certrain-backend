import { Repository } from 'typeorm';
import { Site } from '../entities/site.entity';
import { CreateSiteDTO } from '../DTOs/createSite.dto';
import { UpdateSiteDTO } from '../DTOs/updateSite.dto';
export declare class SiteService {
    private readonly siteRepository;
    constructor(siteRepository: Repository<Site>);
    createSite(userId: string, createSiteDTO: CreateSiteDTO): Promise<Site>;
    findSiteById(userId: string, siteId: string): Promise<Site>;
    findAllSites(userId: string): Promise<Site[]>;
    deleteSite(userId: string, siteId: string): Promise<void>;
    updateSite(userId: string, siteId: string, updateSiteDTO: UpdateSiteDTO): Promise<Site>;
}
