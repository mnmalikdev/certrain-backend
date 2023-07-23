import { AssetRegister } from '../entities/assetRegister.entity';
import { Repository } from 'typeorm';
import { CreateAssetRegisterDto } from '../DTOs/createAssetRegister.dto';
import { UpdateAssetRegisterDto } from '../DTOs/updateAssetRegister.dto';
export declare class AssetRegisterService {
    private readonly assetRegisterRepository;
    constructor(assetRegisterRepository: Repository<AssetRegister>);
    createAssetRegister(userId: string, dto: CreateAssetRegisterDto, files: any): Promise<AssetRegister>;
    updateAssetRegister(userId: string, assetId: string, dto: UpdateAssetRegisterDto, files: any): Promise<AssetRegister>;
    deleteAssetRegister(userId: string, assetId: string): Promise<void>;
    getAssetRegister(userId: string, assetId: string): Promise<AssetRegister>;
    getAllAssetRegisters(userId: string): Promise<AssetRegister[]>;
}
