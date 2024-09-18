import gitHubLogo from '../assets/github.png'
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';

import { useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <Container className="App">
      <img src={gitHubLogo} alt="Logo do GitHub" width={72} height={72} />
      <Input />
      <Button />
      <ItemRepo />
      
    </Container>
  );
}

export default App;
