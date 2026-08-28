import type { TypeConteudo } from '../types';
import Cards from './Cards';
import style from './Conteudo.module.css';

export default function Conteudo({ alunos }: TypeConteudo) {
  return (
    <main className={style.conteudo_principal}>
      <h2 className={style.secao_titulo}>Lista de Integrantes Cadastrados</h2>
      <Cards alunos={alunos} />
    </main>
  );
}