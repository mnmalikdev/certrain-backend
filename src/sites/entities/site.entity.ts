import { ApiProperty } from '@nestjs/swagger';
import { AssetRegister } from 'src/assetRegister/entities/assetRegister.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';

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

  @OneToMany(
    () => AssetRegister,
    (assetRegister) => assetRegister.assetsOfSite,
    { onDelete: 'SET NULL', cascade: true },
  )
  assets: AssetRegister[];

  @ManyToOne(() => User, (user) => user.userSites)
  siteCreatedBy: User;

  @ManyToMany(
    () => RiskAssessment,
    (riskAssessment) => riskAssessment.assignedToSites,
    {
      nullable: true,
    },
  )
  @JoinTable()
  riskAssessmentsOfSite: RiskAssessment[];
}
