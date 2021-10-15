import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import jwt from '../../../config/jwt';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ load: [jwt] })],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
