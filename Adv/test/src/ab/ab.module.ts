import { Module } from '@nestjs/common';
import { AbController } from './ab.controller';
import { AbService } from './ab.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './abd.entity';
 
@Module({
    imports: [TypeOrmModule.forFeature([Photo]),
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),],
  controllers: [AbController],
  providers: [AbService],
})
export class AbModule {}
