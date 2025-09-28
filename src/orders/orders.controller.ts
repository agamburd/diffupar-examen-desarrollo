import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { QueryOrdersDto } from './dto/query-orders.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    // Si no se cumplen las reglas de validación que NestJS devuelva un error 400 Bad Request.
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Query() query: QueryOrdersDto) {
    // Gracias al ValidationPipe, NestJS valida automáticamente los parámetros de la URL
    // contra nuestro DTO. Si algo es inválido, devuelve un 400 Bad Request.
    return this.ordersService.findAll(query);
  }

  @Get(':orderId')
  findOne(@Param('orderId') orderId: string) {
    // @Param('orderId') extrae el valor del {orderId} de la URL
    return this.ordersService.findOne(orderId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
