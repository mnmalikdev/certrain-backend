import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { User } from 'src/0auth2.0/entites/user.entity';
import { RiskAssessment } from 'src/RiskAssesment/entities/riskAssesment.entity';
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
    onDelete: 'SET NULL',
    cascade: true,
  })
  site: Site;

  @OneToMany(() => Role, (role) => role.site, {
    nullable: true,
  })
  roles: Role;

  @OneToMany(() => Employee, (employee) => employee.belongToDepartment)
  employees: Employee;

  @ManyToOne(() => User, (user) => user.userDepts)
  deptCreatedBy: User;

  @ManyToMany(
    () => RiskAssessment,
    (riskAssessment) => riskAssessment.assignedToDepartments,
    {
      onDelete: 'SET NULL',
      cascade: true,
      nullable: true,
    },
  )
  @JoinTable()
  riskAssessmentsOfDepartment: RiskAssessment[];
}
