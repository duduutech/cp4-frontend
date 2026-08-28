import type { TypeCards } from '../types';
import style from './Cards.module.css';

export default function Cards({ alunos }: TypeCards) {
  return (
    <section className={style.cards_grid}>
      {alunos.map((aluno) => (
        <article key={aluno.id} className={style.card_item}>
          <img src={aluno.avatar} alt={`Avatar de ${aluno.nome}`} className={style.avatar} />
          <h2 className={style.nome}>{aluno.nome}</h2>
          <p className={style.rm}>{aluno.rm}</p>
        </article>
      ))}
    </section>
  );
}