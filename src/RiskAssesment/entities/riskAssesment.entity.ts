import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/0auth2.0/entites/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class RiskAssessment {
  @ApiProperty({
    description: 'Unique ID of the R.A record in DB',
  })
  @PrimaryColumn()
  riskAssessmentId: string;

  // @ApiProperty({
  //   description: 'The ref number of a risk assessment',
  // })
  // @Column()
  // refNo: string;

  // @ApiProperty({
  //   description: 'area on which risk assesment was performed.',
  // })
  // @Column()
  // area: string;

  // @ApiProperty({
  //   description: 'description of risk assesment .',
  // })
  // @Column()
  // description: string;

  // @ApiProperty({
  //   description: 'date of assessment .',
  // })
  // @Column()
  // assessmentDate: string;

  // @ApiProperty({
  //   description: ' review date.',
  // })
  // @Column()
  // reviewDate: string;

  // @ApiProperty({
  //   description: ' status of risk assesment.',
  // })
  // @Column()
  // status: string;

  // todo: it might require a table relation.
  // @ApiProperty({
  //   description: ' who performed it ?',
  // })
  // @Column()
  // riskAssessmentOwner: string;

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
  @Column()
  peopleAtRisk: string;

  @ApiProperty({
    description: ' controls of risk assessment',
  })
  @Column('text', { array: true })
  controls: string[];

  @ApiProperty({
    description: 'residual risk rating.',
  })
  @Column()
  residualRiskRating: number;

  @ApiProperty({
    description: 'residual risk rating x .',
  })
  @Column()
  residualRiskRatingX: number;

  @ApiProperty({
    description: 'residual risk rating y .',
  })
  @Column()
  residualRiskRatingY: number;

  @ApiProperty({
    description: 'risk rating.',
  })
  @Column()
  riskRating: number;

  @ApiProperty({
    description: ' risk rating x .',
  })
  @Column()
  riskRatingX: number;

  @ApiProperty({
    description: ' risk rating y .',
  })
  @Column()
  riskRatingY: number;

  // risk assesment created By

  @ManyToOne(() => User, (user) => user.userRiskAssessments)
  riskAssessmentCreatedBy: User;
}
