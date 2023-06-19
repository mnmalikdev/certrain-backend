import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class AssetRegister {
  @PrimaryColumn()
  assetId: string;

  @ApiProperty()
  @Column()
  assetNo: string;

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

  @ApiProperty()
  @Column()
  riskAssessmentRequired: boolean;

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
}
