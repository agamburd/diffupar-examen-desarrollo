import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Para eliminar los campos que no estén en el DTO
    }),
  );

  app.enableShutdownHooks(); // Habilite esto para que Prisma cierre correctamente de manera ordenada con la BD

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
