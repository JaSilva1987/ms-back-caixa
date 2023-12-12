import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { ReleasesModule } from "./modules/release/release.module";

@Module({
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  imports: [ReleasesModule],
})
export class ApiModule {}
