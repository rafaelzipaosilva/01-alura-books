import './componentes/Header/index';
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainter = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(90deg, #002f52 35%, #326589);

`

function App() {
  return (
    <AppContainter>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainter>  
  );
}

export default App;
