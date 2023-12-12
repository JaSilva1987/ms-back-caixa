import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { ReleaseService } from "./release.service";
import { HttpExceptionDto } from "src/api/filters/http-exception.dto";
import { ReleaseDTO } from "./dto/release.dto";
import { ReleaseEntity } from "../../../database/entities/release.entity";
import { UpdateResult } from "typeorm";

@ApiTags("Releases")
@Controller("Releases")
export class ReleaseController {
  constructor(private readonly releaseService: ReleaseService) {}

  @Get()
  @ApiOperation({ summary: "Retorna Lançamentos" })
  @ApiResponse({ status: 200, isArray: true, type: ReleaseDTO })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  getAllRelease(): Promise<ReleaseEntity[]> {
    return this.releaseService.getAllRelease();
  }

  @Get("/:id")
  @ApiOperation({ summary: "Retorna Lançamentos por Identificador" })
  @ApiParam({ name: "id", description: "Código Identificador" })
  @ApiResponse({ status: 200, isArray: true, type: ReleaseDTO })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  getReleasebyId(@Param("id") id: number): Promise<ReleaseEntity[]> {
    return this.releaseService.getReleasebyId(id);
  }

  @Put("/:id")
  @ApiOperation({ summary: "Atualiza Lançamentos por Identificador" })
  @ApiParam({ name: "id", description: "Código Identificador" })
  @ApiResponse({ status: 200, isArray: true, type: ReleaseDTO })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  putReleasebyId(
    @Param("id") id: number,
    @Body() release: ReleaseDTO
  ): Promise<UpdateResult> {
    return this.releaseService.updateRelease(id, release);
  }

  @Post()
  @ApiOperation({ summary: "Post Ranking Fii" })
  @ApiBody({ required: true, type: ReleaseDTO })
  @ApiResponse({ status: 200, type: ReleaseDTO })
  @ApiResponse({ status: 400, type: HttpExceptionDto })
  @ApiResponse({ status: 401, type: HttpExceptionDto })
  async postRelease(@Body() release: ReleaseDTO): Promise<ReleaseEntity> {
    return this.releaseService.createRealease(release);
  }
}
