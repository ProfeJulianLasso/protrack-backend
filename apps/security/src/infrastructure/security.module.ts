import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ServicesModule } from './services/services.module';
import { MessagingModule } from './messaging/messaging.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [ApiModule, ServicesModule, MessagingModule, PersistenceModule],
  controllers: [],
  providers: [],
})
export class SecurityModule {}
