import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
import { AssetRegisterService } from '../services/assetRegister.service';
import { UpdateAssetRegisterDto } from '../DTOs/updateAssetRegister.dto';
import { AssetRegister } from '../entities/assetRegister.entity';
import { Request } from 'express';
export declare class AssetRegisterController {
    private readonly assetRegisterService;
    constructor(assetRegisterService: AssetRegisterService);
    createAssetRegister(req: Request, files: any, payload: CreateAssetRegisterDto): Promise<AssetRegister>;
    deleteAssetRegister(req: Request, assetId: string): Promise<void>;
    updateAssetRegister(req: Request, assetId: string, files: any, dto: UpdateAssetRegisterDto): Promise<AssetRegister>;
    fetchSingleAsset(req: Request, assetId: string): Promise<AssetRegister>;
    fetchAllAssets(req: Request): Promise<AssetRegister[]>;
}
