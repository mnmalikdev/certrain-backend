import { ApiProperty } from '@nestjs/swagger';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Role } from 'src/roles/entities/Role.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Site {
  @ApiProperty({
    description: 'unique id of site',
  })
  @PrimaryColumn()
  siteId: string;

  @ApiProperty({
    description: 'The name of the site',
    example: 'Example Site',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The address of the site',
    example: '123 Main St, City, Country',
  })
  @Column()
  address: string;

  @OneToMany(() => Department, (department) => department.site)
  departmentOfSite: Department[];

  @OneToMany(() => Contractor, (contractor) => contractor.site)
  contractors: Contractor;

  @OneToMany(() => Role, (role) => role.site)
  roles: Role;

  @OneToMany(() => Employee, (employee) => employee.worksAtSite)
  employees: Employee;
}
