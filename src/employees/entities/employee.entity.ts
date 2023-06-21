import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/Role.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { Department } from 'src/departments/entities/department.entity';
import { AssetRegister } from 'src/assetRegister/entities/assetRegister.entity';

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

  @ApiProperty()
  @Column()
  requestedDocs: string;

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
    {
      onDelete: 'CASCADE',
      cascade: true,
    },
  )
  employeeHasAssets: AssetRegister[];
}
