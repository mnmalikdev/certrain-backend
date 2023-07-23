import { SiteService } from '../services/sites.service';
import { CreateSiteDTO } from '../DTOs/createSite.dto';
import { Site } from '../entities/site.entity';
import { UpdateSiteDTO } from '../DTOs/updateSite.dto';
import { Request } from 'express';
export declare class SiteController {
    private readonly siteService;
    constructor(siteService: SiteService);
    createSite(req: Request, createSiteDTO: CreateSiteDTO): Promise<Site>;
    deleteSite(req: Request, siteId: string): Promise<void>;
    findSiteById(req: Request, siteId: string): Promise<Site>;
    findAllSites(req: Request): Promise<Site[]>;
    updateSite(req: Request, siteId: string, updateSiteDTO: UpdateSiteDTO): Promise<Site>;
}
