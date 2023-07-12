import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// async function bootstrap() {
//   // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//   //   AppModule,
//   //   {
//   //     transport: Transport.KAFKA,
//   //     options: {
//   //       client: {
//   //         brokers: ['kafka:9093'],
//   //       },
//   //       consumer: {
//   //         groupId: 'user-consumer', // declaring consumer here
//   //       },
//   //     },
//   //   },
//   // );
//   // await app.listen();
// }
// bootstrap();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3061); // Running client on 3060
}
bootstrap();
