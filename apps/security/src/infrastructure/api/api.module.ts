import { Module } from '@nestjs/common';
import { CreateUserGateway } from './gateways';

@Module({
  controllers: [CreateUserGateway],
})
export class ApiModule {}
