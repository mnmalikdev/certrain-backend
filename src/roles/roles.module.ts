import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/Role.entity';
import { RoleService } from './services/role.service';
import { RolesController } from './controllers/roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],
  controllers: [RolesController],
})
export class RolesModule {}
