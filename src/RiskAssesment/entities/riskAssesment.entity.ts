import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/0auth2.0/entites/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class RiskAssessment {
  @ApiProperty({
    description: 'Unique ID of the R.A record in DB',
  })
  @PrimaryColumn()
  riskAssesmentId: string;

  @ApiProperty({
    description: 'The ref number of a risk assessment',
  })
  @Column()
  refNo: string;

  @ApiProperty({
    description: 'area on which risk assesment was performed.',
  })
  @Column()
  area: string;

  @ApiProperty({
    description: 'description of risk assesment .',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'date of assessment .',
  })
  @Column()
  assessmentDate: string;

  @ApiProperty({
    description: 'residual risk rating.',
  })
  @Column()
  residualRiskRating: number;

  @ApiProperty({
    description: 'risk rating.',
  })
  @Column()
  riskRating: number;

  @ApiProperty({
    description: ' review date.',
  })
  @Column()
  reviewDate: string;

  @ApiProperty({
    description: ' status of risk assesment.',
  })
  @Column()
  status: string;

  // todo: it might require a table relation.
  @ApiProperty({
    description: ' who performed it ?',
  })
  @Column()
  riskAssessmentOwner: string;

  // tentative fields.

  @ApiProperty({
    description: ' exact hazard',
  })
  @Column()
  hazard: string;

  @ApiProperty({
    description: ' what is at risk?',
  })
  @Column()
  risk: string;

  // might require a relation
  @ApiProperty({
    description: ' what is at risk?',
  })
  @Column('text', { array: true })
  peopleAtRisk: string[];

  @ApiProperty({
    description: ' controls of risk assessment',
  })
  @Column('text', { array: true })
  controls: string[];

  // risk assesment created By

  @ManyToOne(() => User, (user) => user.userRiskAssessments)
  riskAssessmentCreatedBy: User;
}
