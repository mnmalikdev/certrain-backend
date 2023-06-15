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
    type: [String],
  })
  @Column('varchar', { array: true })
  responsibilities: string[];

  @ManyToOne(() => Site, (site) => site.roles, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  site: Site;

  @ManyToOne(() => Department, (department) => department.roles, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  department: Department;

  @OneToMany(() => Employee, (employee) => employee.role, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  employeeRole: Employee;
}
