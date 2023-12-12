import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReleaseEntity } from "./entities/release.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "162.241.41.156",
      port: 3306,
      username: "rgbdigit_userrelease",
      password: "release@2023",
      database: "rgbdigit_release",
      entities: [ReleaseEntity],
      migrations: [],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
