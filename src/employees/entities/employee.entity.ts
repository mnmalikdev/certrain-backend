import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/Role.entity';
import { Contractor } from 'src/contractors/entities/contractor.entity';

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

  @ManyToOne(() => Site, (site) => site.employees)
  worksAtSite: Site;

  @ManyToOne(() => Role, (role) => role.employeeRole, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  role: Role;

  @ManyToOne(() => Contractor, (contractor) => contractor.employeesEmployed)
  employedBy: Contractor;
}
