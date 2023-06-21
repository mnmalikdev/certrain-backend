import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/Role.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Entity()
export class Department {
  @ApiProperty({
    description: 'Unique ID of the department',
  })
  @PrimaryGeneratedColumn('uuid')
  departmentId: string;

  @ApiProperty({
    description: 'The name of the department',
    example: 'Example Department',
  })
  @Column({
    nullable: true,
  })
  name: string;

  @ApiProperty({
    description: 'The phone number of the department',
    example: '123-456-7890',
  })
  @Column({
    nullable: true,
  })
  phoneNumber: string;

  @ApiProperty({
    description: 'The extension number of the department',
    example: '1234',
  })
  @Column({ nullable: true })
  extensionNumber: string;

  @ManyToOne(() => Site, (site) => site.departmentOfSite, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  site: Site;

  @OneToMany(() => Role, (role) => role.site, {
    nullable: true,
  })
  roles: Role;

  @OneToMany(() => Employee, (employee) => employee.belongToDepartment)
  employees: Employee;
}
