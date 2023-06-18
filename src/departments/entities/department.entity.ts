import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Site } from 'src/sites/entities/site.entity';
import { Role } from 'src/roles/entities/Role.entity';

@Entity()
export class Department {
  @ApiProperty({
    description: 'Unique ID of the department',
  })
  @PrimaryColumn()
  departmentId: string;

  @ApiProperty({
    description: 'The name of the department',
    example: 'Example Department',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The phone number of the department',
    example: '123-456-7890',
  })
  @Column()
  phoneNumber: string;

  @ApiProperty({
    description: 'The extension number of the department',
    example: '1234',
  })
  @Column()
  extensionNumber: string;

  @ManyToOne(() => Site, (site) => site.departmentOfSite)
  site: Site;

  @OneToMany(() => Role, (role) => role.site)
  roles: Role;
}
