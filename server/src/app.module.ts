import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    OrdersModule,
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
