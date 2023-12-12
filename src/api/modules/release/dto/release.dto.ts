import { ApiProperty } from "@nestjs/swagger";

export class ReleaseDTO {
  @ApiProperty({ description: "Identificador", type: Number })
  ID?: number;

  @ApiProperty({
    description: "Tipo",
    examples: ["RECEBER", "PAGAR"],
    type: String,
    maxLength: 10,
  })
  TIPO: "RECEBER" | "PAGAR";

  @ApiProperty({
    description: "Descrição",
    type: String,
    maxLength: 200,
  })
  DESCRICAO: string;

  @ApiProperty({ description: "Data de Vencimento", type: Date })
  DATAVENCTO: Date;

  @ApiProperty({ description: "Valor", type: Number })
  VALOR: number;

  @ApiProperty({ description: "Data de Criação", type: Date })
  DATACRACAO: Date;
}
