import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AssetRegister {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Add more columns as needed
}
