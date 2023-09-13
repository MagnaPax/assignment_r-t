import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(order);
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
