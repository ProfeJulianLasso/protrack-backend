import { Module } from '@nestjs/common';
import { MongoDbModule } from './databases/mongodb/mongodb.module';

@Module({
  imports: [MongoDbModule],
})
export class PersistenceModule {}
