import Header from './componentes/Header'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa'
import UltimoLanc from './componentes/UltimoLanc'



const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    list-style: none; 
`


function App() {

  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimoLanc/>
      
    </AppContainer>
  );
  
}

export default App;
