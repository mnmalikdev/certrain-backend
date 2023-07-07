// role.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Department } from 'src/departments/entities/department.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';
import { User } from 'src/0auth2.0/entites/user.entity';

@Entity()
export class Role {
  @ApiProperty({
    description: 'Unique ID of the role',
  })
  @PrimaryColumn()
  roleId: string;

  @ApiProperty({
    description: 'The name of the role',
    example: 'Example Role',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The description of the role',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Responsibilities of the role',
  })
  @Column({ nullable: true })
  responsibilities: string;

  @ManyToOne(() => Site, (site) => site.roles, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true, // Make site property optional
  })
  site: Site;

  @ManyToOne(() => Department, (department) => department.roles, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true, // Make department property optional
  })
  department?: Department;

  @OneToMany(() => Employee, (employee) => employee.role)
  employeeRole: Employee;

  @OneToMany(() => Contractor, (contractor) => contractor.roleOfContractor)
  contractorHasRole: Employee[];

  @ManyToOne(() => User, (user) => user.userRoles)
  roleCreatedBy: User;
}
