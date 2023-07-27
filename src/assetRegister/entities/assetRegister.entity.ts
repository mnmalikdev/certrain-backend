import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/0auth2.0/entites/user.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Site } from 'src/sites/entities/site.entity';
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity()
export class AssetRegister {
  @PrimaryColumn()
  assetId: string;

  @ApiProperty()
  @Column()
  assetNo: string;

  @ApiProperty()
  @Column()
  area: string;

  @ApiProperty()
  @Column()
  make: string;

  @ApiProperty()
  @Column()
  model: string;

  @ApiProperty()
  @Column()
  serialNumber: string;

  @ApiProperty()
  @Column()
  yearOfManufacturer: string;

  @ApiProperty()
  @Column()
  dateInstalled: string;

  @ApiProperty()
  @Column()
  dateCommissioned: string;

  @ApiProperty()
  @Column()
  requiredTraining: string;

  //kept as string because multipart data only  accepts strings. so in dto, we implement a boolean string.
  @ApiProperty()
  @Column()
  riskAssessmentRequired: string;

  @ApiProperty()
  @Column()
  internalInspectionFrequency: string;

  @ApiProperty()
  @Column()
  statutoryInspection: string;

  @ApiProperty()
  @Column()
  dateOfStatutoryInspection: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  internalInpectionForm: string; // Updated to store the file path or file name

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  documents: string;

  @ManyToOne(() => Site, (site) => site.assets)
  assetsOfSite: Site;

  @ManyToOne(() => Employee, (employee) => employee.employeeHasAssets, {
    onDelete: 'SET NULL',
    cascade: true,
  })
  assetsOfEmployee: Employee;

  @ManyToOne(() => User, (user) => user.userAssets)
  assetCreatedBy: User;
}
