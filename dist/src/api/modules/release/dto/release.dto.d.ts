export declare class ReleaseDTO {
    ID?: number;
    TIPO: "RECEBER" | "PAGAR";
    DESCRICAO: string;
    DATAVENCTO: Date;
    VALOR: number;
    DATACRACAO: Date;
}
