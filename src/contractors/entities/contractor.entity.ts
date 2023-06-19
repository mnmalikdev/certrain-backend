import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/employees/entities/employee.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';

@Entity()
export class Contractor {
  @ApiProperty({
    description: 'Unique ID of the contractor',
  })
  @PrimaryColumn()
  contractorId: string;

  @ApiProperty({
    description: 'The name of the contractor',
    example: 'Example Contractor',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The description of the contractor',
    example: 'Contractor description',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'The person in charge of the contractor',
    example: 'John Doe',
  })
  @Column()
  personInCharge: string;

  @ApiProperty({
    description: 'The role of the contractor',
    example: 'Contractor Role',
  })
  @Column()
  role: string;

  @ApiProperty({
    description: 'The email of the person in charge',
    example: 'john.doe@example.com',
  })
  @Column()
  personInChargeEmail: string;

  @ApiProperty({
    description: 'The phone number of the person in charge',
    example: '123-456-7890',
  })
  @Column()
  personInChargePhone: string;

  @ApiProperty({
    description: 'The address of the contractor',
    example: '123 Main St, City, Country',
  })
  @Column()
  address: string;

  @ApiProperty({
    description: 'The VAT (Value Added Tax) of the contractor',
    example: '123456789',
    required: false,
  })
  @Column({ nullable: true })
  VAT: string;

  @ApiProperty({
    description: 'The documents required within',
    example: '7 days',
  })
  @Column()
  docsRequiredWithin: string;

  @ApiProperty({
    description: 'The requested documentation',
  })
  @Column()
  requestedDocumentation: string;

  @ManyToOne(() => Site, (site) => site.contractors, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  site: Site;

  @OneToMany(() => Employee, (employee) => employee.employedBy)
  employeesEmployed: Employee[];

  // Add the ManyToOne relationship with Role entity if necessary
  // @ManyToOne(() => Role, (role) => role.contractors)
  // role: Role;
}
