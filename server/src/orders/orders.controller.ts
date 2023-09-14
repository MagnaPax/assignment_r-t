import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const result = await this.ordersService.createOrder(createOrderDto);
    const savedOrder = await result.value;
    const orderID = await result.order_id;
    const returnMessage = `주문번호 : ${orderID} : 수신`;
    return { savedOrder, returnMessage };
  }

  @Get()
  findAll() {
    return this.ordersService.findAllOrders();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateOrder(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.removeOrder(+id);
  }
}
