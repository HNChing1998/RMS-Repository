import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Fullname: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @Column()
  Institute: string;

  @Column()
  Gender: string;

  @Column()
  Position: string;

  @Column()
  Type: string;

  @Column({ default: true })
  isActive: boolean;
}
