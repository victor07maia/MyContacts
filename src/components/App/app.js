import GlobalStyle from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/theme/default';
import { Container } from './style'
import Header from '../header';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
        <Container>
          <Header />
          <Routes />
        </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
