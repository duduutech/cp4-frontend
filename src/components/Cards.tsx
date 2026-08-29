import type { TypeCards } from '../types';
import style from './Cards.module.css';

export default function Cards({ alunos }: TypeCards) {
  return (
    <section className={style.cards_grid}>
      {alunos.map((aluno) => (
        <article key={aluno.id} className={style.card_item}>
          <div className={style.card_header}>
            <span className={style.status_badge}>● Ativo</span>
            <span className={style.id_tag}>#{String(aluno.id).padStart(2, '0')}</span>
          </div>

          <div className={style.avatar_wrapper}>
            <img
              src={aluno.avatar}
              alt={`Foto de perfil do integrante ${aluno.nome}`}
              className={style.avatar}
            />
          </div>

          <div className={style.info_corpo}>
            <h2 className={style.nome}>{aluno.nome}</h2>
            <div className={style.rm_container}>
              <span className={style.rm_label}>RM</span>
              <span className={style.rm_valor}>{aluno.rm.replace('RM', '')}</span>
            </div>
          </div>

          <div className={style.card_footer}>
            <span className={style.tag_curso}>ADS - Front-End React</span>
          </div>
        </article>
      ))}
    </section>
  );
}