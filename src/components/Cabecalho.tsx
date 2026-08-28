import type { TypeCabecalho } from '../types';
import style from './Cabecalho.module.css';

export default function Cabecalho({ titulo, logo }: TypeCabecalho) {
  document.title = titulo;

  return (
    <header className={style.cabecalho_container}>
      <img src={logo} alt="Logo da Aplicação" className={style.logo} />
      <h1 className={style.titulo}>{titulo}</h1>
    </header>
  );
}