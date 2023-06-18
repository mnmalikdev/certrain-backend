import { Controller } from '@nestjs/common';
import { AssetRegisterService } from '../services/assetRegister.service';
// Import any required dependencies

@Controller('asset-register')
export class AssetRegisterController {
  constructor(private readonly assetRegisterService: AssetRegisterService) {}
  // Implement your controller methods here
}
