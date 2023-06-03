import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/departments/entities/department.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Site {
  @ApiProperty({
    description: 'unique id of site',
  })
  @PrimaryColumn()
  siteId: string;

  @ApiProperty({
    description: 'The name of the site',
    example: 'Example Site',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The address of the site',
    example: '123 Main St, City, Country',
  })
  @Column()
  address: string;

  @OneToMany(() => Department, (department) => department.sites)
  departmentOfSite: Department;
}
