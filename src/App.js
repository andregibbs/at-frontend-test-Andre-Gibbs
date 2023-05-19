import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

export const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: auto;
    }
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Layout/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
