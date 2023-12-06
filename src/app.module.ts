import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartController } from './smart/smart.controller';
import { ServiceController } from './service/service.controller';
import { SimpleController } from './simple/simple.controller';
import { InterceptController } from './intercept/intercept.controller';
import { ConverterService } from './converter/converter.service';
import { CommaInterceptor } from './comma/comma.interceptor';

@Module({
  imports: [],
  controllers: [
    AppController,
    SmartController,
    ServiceController,
    SimpleController,
    InterceptController,
  ],
  providers: [AppService, ConverterService, CommaInterceptor],
})
export class AppModule {}
