import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';
import { listaAlunos } from './data/alunos';

function App() {
  const tituloPagina = 'CP4 - Front-End ';
  const logoUrl = '/next-logo.png';
  const textoRodape = '© 2026 FIAP - Análise e Desenvolvimento de Sistemas | CP4';

  return (
    <>
      <Cabecalho titulo={tituloPagina} logo={logoUrl} />
      <Conteudo alunos={listaAlunos} />
      <Rodape texto={textoRodape} />
    </>
  );
}

export default App;