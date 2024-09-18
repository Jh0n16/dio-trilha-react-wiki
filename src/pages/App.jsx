import gitHubLogo from '../assets/github.png'
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

function App() {
  return (
    <Container className="App">
      <img src={gitHubLogo} alt="Logo do GitHub" width={72} height={72} />
      <Input />
      <ItemRepo />
      
    </Container>
  );
}

export default App;
