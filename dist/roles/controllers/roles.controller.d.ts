import { RoleService } from '../services/role.service';
import { Role } from '../entities/role.entity';
import { CreateRoleDTO } from '../DTOs/createRole.dto';
import { UpdateRoleDTO } from '../DTOs/updateRole.dto';
import { Request } from 'express';
export declare class RolesController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRole(req: Request, createRoleDTO: CreateRoleDTO): Promise<Role>;
    getRoleById(req: Request, roleId: string): Promise<Role>;
    getAllRoles(req: Request): Promise<Role[]>;
    deleteRole(req: Request, roleId: string): Promise<void>;
    updateRole(req: Request, roleId: string, updateRoleDto: UpdateRoleDTO): Promise<Role>;
}
