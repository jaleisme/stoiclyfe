import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ UsersModule, AuthModule,
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
