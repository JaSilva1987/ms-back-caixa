import { Injectable } from "@nestjs/common";
import { ReleaseDTO } from "./dto/release.dto";
import { ReleaseEntity } from "src/database/entities/release.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";

@Injectable()
export class ReleaseService {
  constructor(
    @InjectRepository(ReleaseEntity)
    private releaseRepository: Repository<ReleaseEntity>
  ) {}

  async getAllRelease(): Promise<ReleaseEntity[]> {
    return this.releaseRepository.find();
  }

  async getReleasebyId(ID: number): Promise<ReleaseEntity[]> {
    return await this.releaseRepository.find({ where: { ID } });
  }

  async createRealease(release: ReleaseDTO): Promise<ReleaseEntity> {
    return await this.releaseRepository.save(release);
  }

  async updateRelease(ID: number, release: ReleaseDTO): Promise<UpdateResult> {
    return await this.releaseRepository
      .createQueryBuilder()
      .update(ReleaseEntity)
      .set({
        TIPO: release.TIPO,
        DESCRICAO: release.DESCRICAO,
        DATAVENCTO: release.DATAVENCTO,
        VALOR: release.VALOR,
        DATACRACAO: release.DATACRACAO,
      })
      .where("ID = :id", { id: ID })
      .execute();
  }
}
