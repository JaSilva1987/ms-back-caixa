import { Module } from "@nestjs/common";
import { ReleaseService } from "./release.service";
import { ReleaseController } from "./release.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReleaseEntity } from "src/database/entities/release.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ReleaseEntity])],
  controllers: [ReleaseController],
  providers: [ReleaseService],
})
export class ReleasesModule {}
