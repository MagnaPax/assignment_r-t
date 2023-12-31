import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product', database: 'rgt' })
export class Order {
  @PrimaryGeneratedColumn()
  order_id?: number;

  @Column()
  product_name?: string;

  @Column()
  options?: string;

  @Column()
  table_no?: number;

  @Column()
  quantity?: number;

  @Column({ type: 'date' })
  order_date?: Date;

  @Column({ type: 'time' })
  order_time?: Date;

  @Column()
  robot_status?: string;

  @Column({ type: 'datetime' })
  date_time?: Date;

  @Column()
  seq?: string;

  @Column()
  dong?: string;

  @Column()
  ho?: string;

  @Column()
  orderer_name?: string;
}
