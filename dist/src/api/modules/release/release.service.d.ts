import { ReleaseDTO } from "./dto/release.dto";
import { ReleaseEntity } from "src/database/entities/release.entity";
import { Repository, UpdateResult } from "typeorm";
export declare class ReleaseService {
    private releaseRepository;
    constructor(releaseRepository: Repository<ReleaseEntity>);
    getAllRelease(): Promise<ReleaseEntity[]>;
    getReleasebyId(ID: number): Promise<ReleaseEntity[]>;
    createRealease(release: ReleaseDTO): Promise<ReleaseEntity>;
    updateRelease(ID: number, release: ReleaseDTO): Promise<UpdateResult>;
}
