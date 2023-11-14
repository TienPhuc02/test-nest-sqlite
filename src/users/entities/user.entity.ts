import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  password: string;
  @Column()
  passwordConfirm: string;
  @Column()
  emailAddress: string;
  @Column()
  phoneNumber: string;
  @Column()
  gender: string;
  @Column({ nullable: true })
  createdById: number;
  @Column({ nullable: true })
  updatedById: number;
  @Column({ nullable: true })
  deletedById: number;
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'createdById' })
  createdBy: User;
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'updatedById' })
  updatedBy: User;
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'deletedById' })
  deletedBy: User;
  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateDate: Date;
  @DeleteDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deleteDate: Date;
}
