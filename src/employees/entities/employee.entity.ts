import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/Role.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Department } from 'src/departments/entities/department.entity';
import { AssetRegister } from 'src/assetRegister/entities/assetRegister.entity';
import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';

@Entity()
export class Employee {
  @ApiProperty({
    description: 'Unique ID of the employee',
  })
  @PrimaryColumn()
  employeeId: string;

  @ApiProperty({
    description: 'The employee first name',
  })
  @Column()
  firstName: string;

  @ApiProperty({
    description: 'The employee surname or last name',
  })
  @Column()
  surName: string;

  @ApiProperty({
    description: 'Employee Number',
  })
  @Column()
  empNumber: string;

  @ApiProperty({
    description: 'Employee email',
  })
  @Column()
  email: string;

  @ApiProperty({
    description: 'Employee email',
  })
  @Column()
  phoneNumber: string;

  @ApiProperty({
    description: 'type of employment',
    example: 'part-time',
  })
  @Column()
  employmentType: string;

  @ApiProperty({
    description: 'current employment status',
    example: 'permanent',
  })
  @Column()
  employmentStatus: string;

  @ApiProperty({
    description: ' requested documentation',
  })
  @Column('text', { array: true })
  requestedDocs: string[];

  @ApiProperty()
  @Column()
  requiredWithin: string;

  @ManyToOne(() => Site, (site) => site.employees, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  worksAtSite: Site;

  @ManyToOne(() => Role, (role) => role.employeeRole, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  role: Role;

  @ManyToOne(() => Contractor, (contractor) => contractor.employeesEmployed, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  employedBy: Contractor;

  @ManyToOne(() => Department, (department) => department.employees, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  belongToDepartment: Department;

  @OneToMany(
    () => AssetRegister,
    (assetRegister) => assetRegister.assetsOfEmployee,
  )
  employeeHasAssets: AssetRegister[];

  @ManyToOne(() => User, (user) => user.userEmployees)
  employeeCreatedBy: User;

  @ManyToMany(
    () => RiskAssessment,
    (riskAssessment) => riskAssessment.riskAssessmentOwners,
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  riskAssessmentsOwned: RiskAssessment[];
}
