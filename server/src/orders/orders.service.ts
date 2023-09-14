import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

import { DBHandlingService } from '../db.handling';

@Injectable()
export class OrdersService {
  private dbhandling = new DBHandlingService();

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const keyword = createOrderDto.product_name;
    const columnName = 'product_name';
    let isDuplicate: CreateOrderDto[] = [];
    const theProduct = '카페테리아';

    if (keyword === theProduct) {
      isDuplicate = await this.dbhandling.findRecordsByValue(
        keyword,
        columnName,
        this.orderRepository,
      );
    }

    console.log(isDuplicate);

    if (isDuplicate.length !== 0) {
      console.log(`${theProduct} 중복됨`);
      const newWord = '카페라떼';

      // 제품 이름이 theProduct인 레코드들의 제품 이름을 newWord로 변경
      for (const record of isDuplicate) {
        console.log(`${record.order_id}\t${record.product_name}`);
        await this.orderRepository.update(
          { order_id: record.order_id },
          { product_name: newWord },
        );
      }
    }

    const order = await this.orderRepository.create(createOrderDto);
    const saveOrder = await this.orderRepository.save(order);
    return { value: saveOrder, order_id: saveOrder.order_id };
  }

  async findAllOrders() {
    return await this.orderRepository.find();
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepository.update(id, updateOrderDto);
  }

  async removeOrder(id: number) {
    return await this.orderRepository.delete(id);
  }
}
