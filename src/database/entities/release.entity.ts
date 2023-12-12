import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("release")
export class ReleaseEntity {
  @PrimaryGeneratedColumn()
  ID?: number;

  @Column({ name: "Tipo" })
  TIPO: string;

  @Column({ name: "Descricao" })
  DESCRICAO: string;

  @Column({ name: "DATAVENCTO" })
  DATAVENCTO: Date;

  @Column("decimal", { precision: 10, scale: 2, name: "VALOR" })
  VALOR: number;

  @Column({ nullable: true })
  DATACRACAO: Date;
}
