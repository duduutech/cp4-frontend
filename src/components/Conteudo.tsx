import { useState } from 'react';
import type { TypeConteudo } from '../types';
import Cards from './Cards';
import style from './Conteudo.module.css';

export default function Conteudo({ alunos }: TypeConteudo) {
  const [busca, setBusca] = useState('');

  const alunosFiltrados = alunos.filter(
    (aluno) =>
      aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
      aluno.rm.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className={style.conteudo_principal}>
  
      <section className={style.hero_section}>
        <div className={style.hero_badge}>Turma 1TDSPI • 2026</div>
        <h2 className={style.hero_title}>Estudantes Ativos FIAP</h2>
      </section>

      
      <section className={style.painel_controle}>
        <div className={style.busca_wrapper}>
          <input
            type="text"
            className={style.input_busca}
            placeholder="Pesquisar por nome ou RM..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <span className={style.contador}>
            {alunosFiltrados.length} {alunosFiltrados.length === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>
      </section>

     
      {alunosFiltrados.length > 0 ? (
        <Cards alunos={alunosFiltrados} />
      ) : (
        <div className={style.vazio}>
          <p>Nenhum integrante encontrado para "{busca}".</p>
        </div>
      )}
    </main>
  );
}