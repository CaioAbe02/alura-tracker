import IProjeto from "./IProjetos";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    prjeto: IProjeto
}