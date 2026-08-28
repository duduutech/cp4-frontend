export type Aluno = {
  id: number;
  nome: string;
  rm: string;
  avatar: string;
};
export type TypeCabecalho = {
  titulo: string;
  logo: string;
};
export type TypeConteudo = {
  alunos: Aluno[];
};
export type TypeCards = {
  alunos: Aluno[];
};
export type TypeRodape = {
  texto: string;
};