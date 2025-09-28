import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryOrdersDto } from './dto/query-orders.dto'; // Importar DTO de query
import { Prisma } from '@prisma/client'; // Importar tipos de Prisma

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return 'Esta acción agrega una nueva orden';
  }

   // Lógica para GET /orders (con filtros)
  findAll(query: QueryOrdersDto) {
    const { source, bridge } = query;

    // Cláusula 'where' de Prisma
    const where: Prisma.OrdersWhereInput = {};

    if (source) {
      where.source = source;
    }

    if (bridge) {
      if (bridge === 'present') {
        where.bridgeId = { not: null };
      } else if (bridge === 'absent') {
        where.bridgeId = null;
      }
    }

    return this.prisma.orders.findMany({ where });
  }

  // Lógica para GET /orders/ orderId
  async findOne(orderId: string) {
    // Se usa findFirst porque orderId no es la PK
    const order = await this.prisma.orders.findFirst({
      where: { orderId: orderId },
    });

    if (!order) {
      // Si no se encuentra la orden, que NestJS devuelva un 404
      throw new NotFoundException(`Order with ID '${orderId}' not found`);
    }

    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `Esta acción actualiza una #${id} orden`;
  }

  remove(id: number) {
    return `Esta acción elimina una #${id} orden`;
  }
}
