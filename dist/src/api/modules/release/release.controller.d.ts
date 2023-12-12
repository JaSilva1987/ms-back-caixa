import { ReleaseService } from "./release.service";
import { ReleaseDTO } from "./dto/release.dto";
import { ReleaseEntity } from "../../../database/entities/release.entity";
import { UpdateResult } from "typeorm";
export declare class ReleaseController {
    private readonly releaseService;
    constructor(releaseService: ReleaseService);
    getAllRelease(): Promise<ReleaseEntity[]>;
    getReleasebyId(id: number): Promise<ReleaseEntity[]>;
    putReleasebyId(id: number, release: ReleaseDTO): Promise<UpdateResult>;
    postRelease(release: ReleaseDTO): Promise<ReleaseEntity>;
}
