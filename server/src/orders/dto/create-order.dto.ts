// export class CreateOrderDto {}
export class CreateOrderDto {
  order_id!: number;

  product_name?: string;

  options?: string;

  table_no?: number;

  quantity?: number;

  order_date?: Date;

  order_time?: Date;

  robot_status?: string;

  date_time?: Date;

  seq?: string;

  dong?: string;

  ho?: string;

  orderer_name?: string;
}
