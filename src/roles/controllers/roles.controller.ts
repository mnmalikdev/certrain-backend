import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  HttpStatus,
  Patch,
  HttpException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RoleService } from '../services/role.service';
import { Role } from '../entities/Role.entity';
import { CreateRoleDTO } from '../DTOs/createRole.dto';
import { UpdateRoleDTO } from '../DTOs/updateRole.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('roles')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RoleService) {}

  @Post('createRole')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Creates a new role',
    type: Role,
  })
  async createRole(
    @Req() req: Request,
    @Body() createRoleDTO: CreateRoleDTO,
  ): Promise<Role> {
    try {
      const newRole = await this.roleService.createRole(
        req.user['sub'],
        createRoleDTO,
      );
      return newRole;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get('fetchRole/:roleId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves a role by ID',
    type: Role,
  })
  async getRoleById(
    @Req() req: Request,
    @Param('roleId') roleId: string,
  ): Promise<Role> {
    try {
      const role = await this.roleService.findRoleById(req.user['sub'], roleId);
      return role;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('fetchAllRoles')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieves all roles',
    type: [Role],
  })
  async getAllRoles(@Req() req: Request): Promise<Role[]> {
    try {
      const roles = await this.roleService.findAllRoles(req.user['sub']);
      return roles;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('deleteRole/:roleId')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Deletes a role',
  })
  async deleteRole(
    @Req() req: Request,
    @Param('roleId') roleId: string,
  ): Promise<void> {
    try {
      await this.roleService.deleteRole(req.user['sub'], roleId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Patch('updateRole/:roleId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'update existing role',
    type: Role,
  })
  async updateRole(
    @Req() req: Request,
    @Param('roleId') roleId: string,
    @Body() updateRoleDto: UpdateRoleDTO,
  ): Promise<Role> {
    try {
      const newRole = await this.roleService.updateRole(
        req.user['sub'],
        roleId,
        updateRoleDto,
      );
      return newRole;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
