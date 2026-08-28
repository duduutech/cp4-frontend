import type { TypeRodape } from '../types';
import style from './Rodape.module.css';

export default function Rodape({ texto }: TypeRodape) {
  return (
    <footer className={style.rodape_container}>
      <p className={style.texto}>{texto}</p>
    </footer>
  );
}