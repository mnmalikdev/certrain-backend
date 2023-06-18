import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetRegister } from './entities/assetRegister.entity';
import { AssetRegisterService } from './services/assetRegister.service';
import { AssetRegisterController } from './controllers/assetRegister.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AssetRegister])],
  providers: [AssetRegisterService],
  controllers: [AssetRegisterController],
})
export class AssetRegisterModule {}
