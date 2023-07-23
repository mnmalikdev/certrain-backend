import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { CreateRoleDTO } from '../DTOs/createRole.dto';
import { UpdateRoleDTO } from '../DTOs/updateRole.dto';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    createRole(userId: string, createRoleDTO: CreateRoleDTO): Promise<Role>;
    findRoleById(userId: string, roleId: string): Promise<Role>;
    findAllRoles(userId: string): Promise<Role[]>;
    deleteRole(userId: string, roleId: string): Promise<void>;
    updateRole(userId: string, roleId: string, updateRoleDTO: UpdateRoleDTO): Promise<Role>;
}
